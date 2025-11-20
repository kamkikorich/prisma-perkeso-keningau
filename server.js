import express from 'express';
import bodyParser from 'body-parser';
import { prosesPertanyaan } from './logic.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.json());

console.log("🕵️ MOD PENYIASAT DIAKTIFKAN...");
console.log("🔑 Semak API Key:", process.env.GEMINI_API_KEY ? "ADA (Panjang: " + process.env.GEMINI_API_KEY.length + ")" : "TIADA! ❌");

app.post('/tanya', async (req, res) => {
    console.log(`\n📩 Soalan diterima: "${req.body.soalan}"`);
    try {
        const jawapan = await prosesPertanyaan(req.body.soalan);
        console.log("✅ Jawapan berjaya dijana!");
        res.json({ success: true, jawapan });
    } catch (error) {
        console.error("❌ ERROR BESAR BERLAKU:", error); // Ini akan tunjuk punca sebenar di PowerShell
        res.json({ success: false, jawapan: "Maaf, ada ralat dalaman. Lihat terminal untuk info." });
    }
});

app.listen(port, () => console.log(`🚀 PRISMA sedia di http://localhost:${port}`));