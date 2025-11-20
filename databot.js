// =======================================================
// === FAIL: dataBot.js (DATA MUTAKHIR & SCRAPER MAPS) ===
// =======================================================

// 1. PORTAL RASMI (LINK LOGIN SAHAJA)
export const PORTAL_RASMI = {
    'permohonan faedah online': 'https://lindungfaedah.perkeso.gov.my/', 
    'login faedah': 'https://lindungfaedah.perkeso.gov.my/',
    'portal faedah': 'https://lindungfaedah.perkeso.gov.my/',
    'portal lindung': 'https://lindungfaedah.perkeso.gov.my/',
    'assist login': 'https://assist.perkeso.gov.my/employer/login',
    'login majikan myfuturejobs': 'https://employers.myfuturejobs.gov.my/auth/realms/employers/protocol/openid-connect/auth?client_id=employers-app&redirect_uri=https%3A%2F%2Femployers.myfuturejobs.gov.my%2F%3Flogin%3D&state=b3830b43-8f95-4815-88a6-dd77c3b67b7c&response_mode=fragment&response_type=code&scope=openid&nonce=9978594a-2563-447b-8a39-66516ad7330f&code_challenge=BgjPcN3HvBI8nFDkyc4coTucu2BulBrCH-02pFa75pw&code_challenge_method=S256',
    'eis portal': 'https://eis.perkeso.gov.my/',
    'suri portal': 'https://suri.perkeso.gov.my/',
};

// 2. DIREKTORI FALLBACK (DIKOSONGKAN MENGIKUT STRUKTUR ASAL)
export const DIREKTORI_NEGERI = {};

// 3. PERUNDANGAN (DIKOSONGKAN MENGIKUT STRUKTUR ASAL)
export const PERUNDANGAN_RASMI = {};

// 4. FAQ DATA (DATA LENGKAP DARI WHATSAPP)
export const FAQ_DATA = {
    'lindung': `🛡️ **Penjenamaan Baharu: PERKESO LINDUNG**
1. **LINDUNG PEKERJA** (Skim Bencana Kerja/Keilatan - Akta 4)
2. **LINDUNG KENDIRI** (SKSPS - Akta 789)
3. **LINDUNG KERJAYA** (SIP/EIS - Akta 800)
4. **LINDUNG KASIH** (Suri Rumah - Akta 838)`,

    'daftar majikan': `🏢 **Panduan Pendaftaran Majikan**
1. **Siapa Wajib?** Majikan yang menggaji min. 1 pekerja (gaji RM30+).
2. **Tempoh:** Daftar dalam 30 hari selepas ambil pekerja.
3. **Dokumen:** SSM, IC Majikan/Wakil, Senarai Pekerja, Maklumat Bank.
4. **Cara:** Isi Borang 1 & Lampiran A (Maklumat Pekerja) di Portal ASSIST.
⚠️ *Penalti: Denda hingga RM10,000 atau penjara 2 tahun jika gagal.*`,

    'daftar pekerja': `👷 **Pendaftaran Pekerja**
1. **Siapa Wajib?** Semua Warganegara Malaysia & PR (Tetap/Kontrak/Part-time).
2. **Cara:** Portal ASSIST > My Sites > REGISTRATION > Register Employee.
*Nota: Pekerja praktikal (intern) yang terima elaun >RM30 juga wajib didaftarkan.*`,

    'kadar caruman': `💰 **Info Caruman & Gaji**
1. **Jadual:** Rujuk Jadual Caruman (Skim Bencana & Keilatan).
2. **Had Gaji:** Caruman dihadkan (capped) pada gaji RM5,000. (Gaji RM10k tetap bayar ikut kadar RM5k).
3. **Tarikh Bayar:** Sebelum 15hb setiap bulan.
4. **Lewat?** Denda 6% setahun atas amaun tertunggak.`,

    'myfuturejobs': `💼 **Info MyFutureJobs (MFJ)**
Portal pekerjaan nasional & latihan PERKESO.
1. **Majikan:** Wajib daftar jika ambil pekerja asing atau mahu insentif kerajaan.
2. **Pekerja:** Wajib daftar jika tuntut SIP (Elaun Mencari Pekerjaan).
3. **Latihan:** Menyediakan program 'Place & Train' & 'Upskilling'.
👉 *Layari: www.myfuturejobs.gov.my*`,

    'pekerja asing': `🌍 **Pekerja Asing (Foreign Workers)**
1. **Akta:** Tidak layak Akta 4 (PERKESO Biasa).
2. **Wajib:** Majikan perlu ambil **SPBPA** (Skim Pelindungan Bencana Kerja Pekerja Asing).
3. **Liputan SPBPA:** Kemalangan kerja, kematian, & hantar pulang jenazah.
4. **SIP:** Pekerja asing TIDAK LAYAK tuntut Elaun Hilang Kerja (SIP).`,

    'pembantu rumah': `🏠 **Pembantu Rumah (Domestik)**
1. **Warga Asing:** Wajib dilindungi bawah SPBPA (Insurans Khas).
2. **Warganegara Malaysia:** Boleh dilindungi bawah **SKSPS (Lindung Kendiri)** atas permohonan sendiri/majikan.
*Jika mencarum SKSPS, mereka layak faedah jika cedera semasa kerja rumah.*`,

    'sksps': `🛵 **SKSPS (Lindung Kendiri)**
Untuk yang tiada majikan (Grab/Foodpanda, Penjaja, Freelancer, Petani).
1. **Syarat:** Warganegara/PR yang menjalankan aktiviti pekerjaan sendiri.
2. **Caruman:** Serendah RM46.60 setahun (mengikut pelan).
3. **Faedah:** Rawatan, MC, HUK, Pencen Penakat, Khairat Kematian.
4. **Cara Daftar:** Kaunter, App Matrix, atau App rakan strategik (Grab/Foodpanda).`,

    'soalan lazim': `❓ **Soalan Popular (FAQ)**
1. **Pekerja Part-Time?** Wajib daftar PERKESO.
2. **Kerja 2 Tempat?** Dua-dua majikan wajib mencarum.
3. **Majikan Tak Bayar?** Pekerja TETAP dilindungi (prinsip *once covered always covered*). Lapor pada PERKESO.
4. **Kemalangan OT/Lunch?** Dilindungi jika berkaitan kerja & laluan munasabah.
5. **Insurans Swasta?** PERKESO tetap wajib walaupun ada insurans lain.`,

    'cara tuntut': `Cara tuntut faedah PERKESO 🤕:
1. **Dokumen:** Borang 21 (Majikan), Borang 10 (Pekerja), Laporan Polis, Resit Rawatan.
2. **Saluran:** Kaunter PERKESO atau Online (https://lindungfaedah.perkeso.gov.my) untuk Pencen Ilat/Penakat.
*Tempoh Proses: Kemalangan (7-14 hari), Keilatan (30-60 hari).*`,

    'kemalangan kerja': `🚑 **Cakupan Kemalangan Kerja**
1. Semasa menjalankan tugas.
2. Perjalanan pergi/balik kerja (Laluan munasabah).
3. Semasa rehat yang dibenarkan.
4. Kecemasan/Bencana domestik (atas permohonan).
*Self-accident (terbabas sendiri) dilindungi jika memenuhi syarat perjalanan.*`,

    'kadar dialisis': `🏥 **Kadar Bantuan Dialisis (Mulai 1 Okt 2025)**
✅ Panel Swasta/NGO: RM170.00 sebulan.
✅ Hospital Kerajaan: RM14.00 sebulan.
*Permohonan kini diproses melalui Penilaian Dalaman (lebih pantas).*`,

    'syarat dialisis': `📋 **Syarat Dialisis**
1. Kelayakan Penuh: 24 bulan caruman dalam 40 bulan berturut-turut.
2. Kelayakan Kurang: Minima 24 bulan caruman (1/3 tempoh kerja).`,

    'lindung kasih': `🏠 **LINDUNG KASIH (Suri Rumah)**
Skim Keselamatan Sosial Suri Rumah (Akta 838).
* Syarat: Wanita, Warganegara/PR, <55 tahun.
* Caruman: RM120 setahun.`,
    
    'sip': `💼 **LINDUNG KERJAYA (SIP/EIS)**
Faedah jika diberhentikan kerja (VSS/MSS/Tutup Kedai).
1. **EMP:** Elaun Ganti Gaji (3-6 bulan).
2. **Syarat:** Mohon dalam 60 hari dari tarikh berhenti.
*Dokumen: Notis berhenti, Slip gaji 6 bulan, Penyata Bank.*`,

    'manual faedah': `📥 **Manual Portal Faedah**
Muat turun di: https://lindungfaedah.perkeso.gov.my`,
    
    'status permohonan': `📊 **Status Permohonan:**
* **DRAF:** Belum hantar.
* **DALAM TINDAKAN:** Sedang disemak pegawai.
* **KIV:** Dokumen tidak lengkap.
* **LULUS:** Bayaran sedang diproses.`,
    
    'lupa kata laluan': `🔐 **Reset Password:** Menu 'Profil' > 'Tukar Kata Laluan'.`,
};

// 5. PETA URL NEGERI & TOPIK
export const URL_NEGERI = {
    'sabah': 'https://www.perkeso.gov.my/sabah.html',
    'sarawak': 'https://www.perkeso.gov.my/sarawak.html',
    'johor': 'https://www.perkeso.gov.my/johor.html',
    'selangor': 'https://www.perkeso.gov.my/selangor.html',
    'kuala lumpur': 'https://www.perkeso.gov.my/wilayah-persekutuan-kuala-lumpur.html',
    'labuan': 'https://www.perkeso.gov.my/wilayah-persekutuan-labuan.html',
    'kedah': 'https://www.perkeso.gov.my/kedah.html',
    'kelantan': 'https://www.perkeso.gov.my/kelantan.html',
    'terengganu': 'https://www.perkeso.gov.my/terengganu.html',
    'pahang': 'https://www.perkeso.gov.my/pahang.html',
    'melaka': 'https://www.perkeso.gov.my/melaka.html',
    'negeri sembilan': 'https://www.perkeso.gov.my/negeri-sembilan.html',
    'perak': 'https://www.perkeso.gov.my/perak.html',
    'pulau pinang': 'https://www.perkeso.gov.my/pulau-pinang.html',
    'perlis': 'https://www.perkeso.gov.my/perlis.html',
    'putrajaya': 'https://www.perkeso.gov.my/wilayah-persekutuan-putrajaya.html',

    // --- TOPIK HTML (Boleh Scrape) ---
    'panduan_assist': 'https://www.perkeso.gov.my/atas-talian/untuk-majikan/portal-assist/panduan-portal-assist.html',
    'pendaftaran_majikan_info': 'https://www.perkeso.gov.my/perkhidmatan-kami/majikan-pekerja/pendaftaran-majikan.html',
    'caruman_info': 'https://www.perkeso.gov.my/perkhidmatan-kami/majikan-pekerja/caruman.html',
    'kadar_caruman': 'https://www.perkeso.gov.my/perkhidmatan-kami/majikan-pekerja/kadar-caruman.html',
    'pembayaran_info': 'https://www.perkeso.gov.my/perkhidmatan-kami/majikan-pekerja/pembayaran.html',
    'kalkulator': 'https://www.perkeso.gov.my/perkhidmatan-kami/majikan-pekerja/kalkulator-caruman.html',
    'penguatkuasaan': 'https://www.perkeso.gov.my/perkhidmatan-kami/majikan-pekerja/penguatkuasaan.html',
    'pekerja_bermajikan': 'https://www.perkeso.gov.my/perkhidmatan-kami/perlindungan/pekerja-bermajikan.html',
    'pekerja_asing': 'https://www.perkeso.gov.my/perkhidmatan-kami/perlindungan/pekerja-asing.html',
    'pekerja_domestik': 'https://www.perkeso.gov.my/perkhidmatan-kami/perlindungan/pekerja-domestik.html',
    'pekerjaan_sendiri': 'https://www.perkeso.gov.my/perkhidmatan-kami/perlindungan/pekerjaan-sendiri.html',
    'suri_rumah': 'https://www.perkeso.gov.my/perkhidmatan-kami/perlindungan/suri-rumah.html',
    'insurans_pekerjaan': 'https://www.perkeso.gov.my/perkhidmatan-kami/perlindungan/insurans-pekerjaan.html',
    'permohonan_faedah': 'https://www.perkeso.gov.my/perkhidmatan-kami/perlindungan/permohonan-faedah.html',
    'borang': 'https://www.perkeso.gov.my/mengenai-kami/rujukan/borang-borang.html',
    'prinsip': 'https://www.perkeso.gov.my/mengenai-kami/maklumat-korporat/prinsip-perlindungan-keselamatan-sosial.html',
    'rehab_malaysia': 'https://www.rehabmalaysia.com/',
    'rtw_program': 'https://www.perkeso.gov.my/perkhidmatan-kami/perubatan/program-pengurusan-hilang-upaya-perkeso.html',
    'klinik_panel': 'https://www.perkeso.gov.my/perkhidmatan-kami/perubatan/klinik-panel.html',
    'pusat_dialisis': 'https://www.perkeso.gov.my/perkhidmatan-kami/perubatan/pusat-dialisis.html',
    'sehati': 'https://sehati.perkeso.gov.my/',
    'skuad_prihatin': 'https://www.perkeso.gov.my/perkhidmatan-kami/perkhidmatan-lain/skuad-perkeso-prihatin-program-social-synergy.html',
    'lmx': 'https://www.perkeso.gov.my/perkhidmatan-kami/perkhidmatan-lain/labour-market-exchange.html',
    'myfuturejobs': 'https://myfuturejobs.gov.my/',
    'myfuturejobs_expat': 'https://www.perkeso.gov.my/perkhidmatan-kami/perkhidmatan-lain/myfuturejobs-bagi-pegawai-dagang.html'
};

// 6. PETA KEYWORD -> URL KEY
export const PETA_LOKASI = {
    'keningau': 'sabah', 'sandakan': 'sabah', 'tawau': 'sabah', 'lahad datu': 'sabah', 
    'kk': 'sabah', 'kota kinabalu': 'sabah', 'beaufort': 'sabah', 'kota marudu': 'sabah',
    'kuching': 'sarawak', 'sibu': 'sarawak', 'miri': 'sarawak', 'bintulu': 'sarawak',
    'jb': 'johor', 'muar': 'johor', 'kluang': 'johor', 'batu pahat': 'johor',
    'shah alam': 'selangor', 'klang': 'selangor', 'pj': 'selangor', 'rawang': 'selangor',
    'ipoh': 'perak', 'kuantan': 'pahang', 'kota bharu': 'kelantan', 'alor setar': 'kedah',
    'georgetown': 'pulau pinang', 'seberang jaya': 'pulau pinang',
    'seremban': 'negeri sembilan', 'kangar': 'perlis', 'labuan': 'labuan', 'kuala lumpur': 'kuala lumpur',

    'panduan assist': 'panduan_assist', 'cara daftar majikan': 'panduan_assist', 'manual assist': 'panduan_assist',
    'syarat daftar majikan': 'pendaftaran_majikan_info', 'siapa perlu daftar': 'pendaftaran_majikan_info',
    'info caruman': 'caruman_info', 'apa itu caruman': 'caruman_info',
    'kadar caruman': 'kadar_caruman', 'jadual caruman': 'kadar_caruman',
    'cara bayar': 'pembayaran_info', 'fpx': 'pembayaran_info',
    'kira caruman': 'kalkulator', 'calculator': 'kalkulator',
    'denda': 'penguatkuasaan', 'lewat bayar': 'penguatkuasaan',

    'pekerja domestik': 'pekerja_domestik', 'maid': 'pekerja_domestik',
    'pekerjaan sendiri': 'pekerjaan_sendiri', 'sksps': 'pekerjaan_sendiri',
    'suri rumah': 'suri_rumah', 'skssr': 'suri_rumah',
    'insurans pekerjaan': 'insurans_pekerjaan', 'sip': 'insurans_pekerjaan',

    'permohonan faedah': 'permohonan_faedah', 'cara mohon': 'permohonan_faedah',
    'borang': 'borang', 'senarai borang': 'borang',
    'prinsip perkeso': 'prinsip', 'misi': 'prinsip',
    'sksp': 'pekerja_bermajikan', 'bencana kerja': 'pekerja_bermajikan', 'keilatan': 'pekerja_bermajikan',
    'pekerja asing': 'pekerja_asing',

    'rehab': 'rehab_malaysia', 'rehabilitasi': 'rehab_malaysia', 'pusat rehab': 'rehab_malaysia',
    'rtw': 'rtw_program', 'return to work': 'rtw_program', 'program kembali bekerja': 'rtw_program',
    'klinik panel': 'klinik_panel', 'senarai klinik': 'klinik_panel', 'doktor panel': 'klinik_panel',
    'dialisis': 'pusat_dialisis', 'pusat dialisis': 'pusat_dialisis', 'buah pinggang': 'pusat_dialisis',
    'sehati': 'sehati', 'saringan kesihatan': 'sehati', 'hsp': 'sehati', 'baucar kesihatan': 'sehati',

    'skuad prihatin': 'skuad_prihatin', 'social synergy': 'skuad_prihatin',
    'lmx': 'lmx', 'labour market': 'lmx',
    'cari kerja': 'myfuturejobs', 'jawatan kosong': 'myfuturejobs', 'myfuturejobs': 'myfuturejobs',
    'pegawai dagang': 'myfuturejobs_expat', 'expat': 'myfuturejobs_expat'
};