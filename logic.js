import dotenv from 'dotenv';
import { GoogleGenerativeAI } from "@google/generative-ai";
import axios from 'axios';
import * as cheerio from 'cheerio';
import https from 'https';
import { FAQ_DATA, URL_NEGERI, PETA_LOKASI, PORTAL_RASMI, PERUNDANGAN_RASMI } from './databot.js';

dotenv.config();

// === 1. KONFIGURASI AI ===
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// [SISTEM INSTRUCTION ASAL TUAN]
const SYSTEM_INSTRUCTION = `
Anda adalah Pegawai Khidmat Pelanggan PERKESO yang SANGAT MESRA, PENYAYANG, dan MEMBANTU. Nama anda ialah "Ejen Prihatin".

TUGASAN UTAMA (AI FUSION):
Anda bertindak sebagai "Hab Maklumat Pintar". Tugas anda adalah menggabungkan (fuse) maklumat daripada sumber berbeza untuk membentuk jawapan yang paling lengkap dan mudah difahami.

PROTOKOL JAWAPAN (HYBRID):
1. **SUMBER UTAMA (WEB):** Jika ada data dari [Laman Web Rasmi], ambil fakta terkini (alamat, berita) dari situ.
2. **SUMBER KEDUA (FAQ):** Gunakan nota dalaman untuk menjelaskan terma yang sukar atau menambah info jika data web terlalu ringkas.
3. **FALLBACK (PENGETAHUAN AM):** Jika [Status Web] = GAGAL atau kosong, jangan panik. Terus ambil alih menggunakan pengetahuan am anda tanpa memberitahu pengguna tentang masalah teknikal.

GAYA BAHASA & TONALITI (WAJIB):
- **MESRA & CERIA:** Mulakan dengan sapaan lembut (Contoh: "Hai!", "Salam sejahtera tuan/puan 😊").
- **EMPATI:** Tunjukkan keprihatinan.
- **PENGGUNAAN EMOJI:** Gunakan emoji yang relevan (🏢, 📞, ✅, 😊).
- **JELAS TAPI SANTAI:** Berikan fakta tepat, tetapi dengan bahasa berbual, bukan bahasa buku teks yang kaku.
`;

// TETAPAN MODEL: 2.5 FLASH SEPERTI ARAHAN TUAN
const model = genAI.getGenerativeModel({ 
    model: "gemini-2.5-flash", 
    systemInstruction: SYSTEM_INSTRUCTION
});

// === 2. WEB SCRAPING (INTELLIGENT SCRAPER - KEKAL STRUKTUR ASAL) ===
async function korekDataWebsite(url, keyword) {
    console.log(`[SCRAPE] Mula: ${url} (Keyword: ${keyword})`);
    
    try {
        const agent = new https.Agent({ rejectUnauthorized: false });
        const headers = { 
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        };

        let response = await axios.get(url, { httpsAgent: agent, headers, timeout: 15000 });
        let $ = cheerio.load(response.data);
        let sumberURL = url;

        // A. Deep Dive Logic (Kekal)
        let linkJumpa = null;
        $('a').each((i, el) => {
            const linkText = $(el).text().toLowerCase().trim();
            const cleanKeyword = keyword ? keyword.toLowerCase().replace('cara', '').replace('panduan', '').trim() : "";
            if (cleanKeyword.length > 3 && linkText.includes(cleanKeyword)) {
                let href = $(el).attr('href');
                if (href && !href.startsWith('javascript') && !href.startsWith('#')) {
                    if (!href.startsWith('http')) {
                        const baseUrl = new URL(url);
                        href = new URL(href, baseUrl.origin).toString();
                    }
                    linkJumpa = href;
                    return false; 
                }
            }
        });

        if (linkJumpa) {
            console.log(`[SCRAPE] Jumpa Sub-Link: ${linkJumpa}`);
            try {
                response = await axios.get(linkJumpa, { httpsAgent: agent, headers, timeout: 15000 });
                $ = cheerio.load(response.data);
                sumberURL = linkJumpa;
            } catch (e) { console.log("Gagal sub-link, fallback ke URL asal."); }
        }

        // B. Pembersihan DOM Agresif (Kekal)
        $('script, style, nav, header, footer, aside, iframe, .menu, .sidebar, .cookie-consent').remove();
        
        // C. Cari Content Utama
        let content = $('article').text() || $('div#content').text() || $('div.main-content').text() || $('body').text();
        content = content.replace(/\s\s+/g, ' ').trim();
        const teksDipotong = content.substring(0, 25000);

        return { success: true, url: sumberURL, data: teksDipotong };

    } catch (error) { 
        console.error(`[SCRAPE ERROR]:`, error.message);
        return { success: false, url: url, data: null, error: error.message };
    }
}

// === 3. AI TYPO FIXER (KEKAL STRUKTUR ASAL) ===
async function tekaLokasiDenganAI(userInput) {
    try {
        const senaraiNegeri = Object.keys(URL_NEGERI).join(', ');
        const prompt = `
        Analisis input: "${userInput}"
        Adakah pengguna mencari LOKASI atau TOPIK (Panduan/Syarat)?
        Senarai Kunci: [${senaraiNegeri}]
        Output JSON: {"found": true, "key": "kunci_dalam_senarai", "search_term": "keyword_carian"}
        Jika tiada: {"found": false}
        `;
        const result = await model.generateContent(prompt);
        const text = result.response.text();
        const jsonStr = text.replace(/```json/g, '').replace(/```/g, '').trim();
        return JSON.parse(jsonStr);
    } catch (e) { return { found: false }; }
}

// === 4. PROSES UTAMA (DIPADANKAN DENGAN WEB SERVER) ===
export async function prosesPertanyaan(soalan) {
    const inputLower = soalan.toLowerCase();
    let contextPayload = { webResult: null, faqData: null };

    // 1. Cari FAQ (Local Data)
    for (const k in FAQ_DATA) {
        if (inputLower.includes(k)) contextPayload.faqData = FAQ_DATA[k];
    }

    // 2. Cari Portal/Akta (Tambahan dari Index.js)
    const PORTAL_KEYWORDS = ['portal', 'laman', 'website', 'login', 'masuk', 'assist', 'eis', 'sip', 'suri', 'sehati', 'rehab', 'myfuturejobs', 'faedah', 'prihatin', 'lindung', 'skssr'];
    if (PORTAL_KEYWORDS.some(k => inputLower.includes(k)) && !contextPayload.faqData) {
        for (const k in PORTAL_RASMI) if (inputLower.includes(k)) contextPayload.faqData = `💻 *Pautan Rasmi:*\n${PORTAL_RASMI[k]}`;
    }
    
    // 3. Logik Scrape (Struktur Asal)
    const DIREKTORI_KEYWORDS = ['alamat', 'pejabat', 'lokasi', 'hubungi', 'telefon', 'syarat', 'kelayakan', 'borang', 'info', 'tentang', 'apa itu'];
    let isTopicDetected = false;
    for (const k of Object.keys(PETA_LOKASI)) { if (inputLower.includes(k)) { isTopicDetected = true; break; } }
    
    const shouldScrape = DIREKTORI_KEYWORDS.some(k => inputLower.includes(k)) || isTopicDetected;

    if (shouldScrape) {
        let urlTarget = null;
        let keywordCarian = null;
        
        for (const [kunci, nilai] of Object.entries(PETA_LOKASI)) {
            if (inputLower.includes(kunci)) { urlTarget = URL_NEGERI[nilai]; keywordCarian = kunci; break; }
        }
        if (!urlTarget) {
            const aiCheck = await tekaLokasiDenganAI(soalan);
            if (aiCheck.found && URL_NEGERI[aiCheck.key]) { 
                urlTarget = URL_NEGERI[aiCheck.key]; keywordCarian = aiCheck.search_term; 
            }
        }

        if (urlTarget) {
            contextPayload.webResult = await korekDataWebsite(urlTarget, keywordCarian);
        }
    }

    // 4. Prompt Fusion (Struktur Asal)
    let webSection = "";
    if (contextPayload.webResult && contextPayload.webResult.success) {
        webSection = `=== [DATA WEB TERKINI] ===\nSUMBER: ${contextPayload.webResult.url}\nISI KANDUNGAN: ${contextPayload.webResult.data}\n==========================\n`;
    } else if (contextPayload.webResult && !contextPayload.webResult.success) {
        webSection = `=== [DATA WEB] ===\nSTATUS: GAGAL (Web Down/Error). Sila aktifkan mod FALLBACK Fusion (Guna Pengetahuan Am).\n==================\n`;
    }

    let faqSection = "";
    if (contextPayload.faqData) {
        faqSection = `=== [NOTA RUJUKAN DALAMAN/FAQ] ===\n${contextPayload.faqData}\n==================================\n`;
    }

    const finalPrompt = `
    CONTEXT DATA (UNTUK FUSION):
    ${webSection}
    ${faqSection}

    SOALAN PENGGUNA: "${soalan}"

    ARAHAN FUSION:
    Gabungkan maklumat di atas untuk menjawab soalan pengguna. 
    - Jika Data Web ada, utamakan ia.
    - Jika Data Web gagal, abaikan error tersebut dan jawab dengan tenang menggunakan pengetahuan am anda.
    - Pastikan nada jawapan SANGAT MESRA, CERIA dan menggunakan EMOJI.
    - Format HTML: Gunakan <br> untuk baris baru dan <b> untuk tebal.
    `;

    try {
        const result = await model.generateContent(finalPrompt);
        return result.response.text();
    } catch (err) {
        console.error('AI Error:', err);
        return "Maaf, ada gangguan teknikal sebentar. Boleh cuba lagi? 🙏";
    }
}