import express from 'express';
import bodyParser from 'body-parser';
import { prosesPertanyaan } from './logic.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.json());

console.log("⏳ Sedang memulakan PRISMA...");

app.post('/tanya', async (req, res) => {
    try {
        const jawapan = await prosesPertanyaan(req.body.soalan);
        res.json({ success: true, jawapan });
    } catch (error) {
        res.json({ success: false, jawapan: "Maaf, ralat sistem." });
    }
});

app.listen(port, () => console.log(`✅ PRISMA Sedia: http://localhost:${port}`));