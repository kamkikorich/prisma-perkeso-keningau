import dotenv from 'dotenv';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { FAQ_DATA, URL_NEGERI, PETA_LOKASI } from './databot.js';

dotenv.config();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

export async function prosesPertanyaan(soalan) {
    const inputLower = soalan.toLowerCase();
    let faqInfo = "";
    
    // Cari dalam FAQ dulu
    for (const k in FAQ_DATA) {
        if (inputLower.includes(k)) faqInfo += FAQ_DATA[k] + "\n";
    }

    const prompt = `
    SUMBER RUJUKAN: ${faqInfo || "Tiada nota spesifik."}
    SOALAN: "${soalan}"
    
    ARAHAN: Anda adalah 'PRISMA', AI Perkeso Keningau. Jawab dengan ringkas, mesra, dan profesional. Gunakan format HTML (<br>, <b>) untuk kekemasan.`;

    try {
        const result = await model.generateContent(prompt);
        return result.response.text();
    } catch (err) {
        return "Maaf, sedang sibuk. Sila cuba lagi.";
    }
}