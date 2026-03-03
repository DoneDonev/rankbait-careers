require('dotenv').config();
const express = require('express');
const multer = require('multer');
// const nodemailer = require('nodemailer');
const { Resend } = require('resend');
const resend = new Resend(process.env.RESEND_API_KEY);
const path = require('path');
const fs = require('fs');
const https = require('https'); // Required for API calls
const http = require('http');   // Required for backup API calls
const uploadDir = path.join(__dirname, 'uploads');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3000;

/* ── HELPERS FOR GEOLOCATION ── */
function fetchExternal(url, module) {
  return new Promise((resolve, reject) => {
    module.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); }
        catch (e) { reject(e); }
      });
    }).on('error', reject);
  });
}

/* ── NEW ROUTE: IP GEOLOCATION PROXY ── */
app.get('/api/locate', async (req, res) => {
  // Get the real client IP (Railway puts it in x-forwarded-for)
  const clientIP = req.headers['x-forwarded-for']?.split(',')[0].trim()
    || req.socket.remoteAddress;

  try {
    const data = await fetchExternal(`https://ipapi.co/${clientIP}/json/`, https);
    if (data.error) throw new Error('Primary limit reached');

    res.json({
      country_code: data.country_code,
      country_name: data.country_name
    });
  } catch (err) {
    console.warn('Primary Geo API failed, trying backup...');
    try {
      const backup = await fetchExternal(`http://ip-api.com/json/${clientIP}`, http);
      res.json({
        country_code: backup.countryCode,
        country_name: backup.country
      });
    } catch (backupErr) {
      res.status(500).json({ success: false, error: "Geolocation failed" });
    }
  }
});

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

/* ── EXISTING: MULTER CONFIG ── */
const upload = multer({
  dest: uploadDir,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB
  fileFilter(req, file, cb) {
    const allowed = ['.pdf', '.doc', '.docx'];
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowed.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error('Only PDF, DOC, DOCX files are allowed.'));
    }
  }
});

app.use(express.static(__dirname));


/* ── EXISTING: FORM SUBMISSION ── */
app.post('/submit', upload.single('cvFile'), async (req, res) => {
  const {
    firstName, lastName, email, phone, city, country,
    position, experience,
    linkedin, coverLetter, referral
  } = req.body;

  const cvFile = req.file;

  if (!firstName || !lastName || !email || !phone || !city || !position) {
    if (cvFile) fs.unlinkSync(cvFile.path);
    return res.status(400).json({ success: false, error: 'Missing required fields.' });
  }

  if (!cvFile) {
    return res.status(400).json({ success: false, error: 'CV file is required.' });
  }

  const htmlBody = `
  <div style="font-family:'DM Sans',Arial,sans-serif;max-width:640px;margin:auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,.08)">
    <div style="background:#121663;padding:32px 40px">
      <h1 style="color:#fff;font-size:1.5rem;margin:0;font-family:Arial,sans-serif">⬡ RankBait — New Application</h1>
      <p style="color:rgba(235,246,255,.65);margin:6px 0 0;font-size:.9rem">Position: <strong style="color:#0887FE">${position}</strong></p>
    </div>
    <div style="padding:32px 40px">
      <h2 style="color:#121663;font-size:1rem;border-bottom:2px solid #EBF6FF;padding-bottom:10px;margin-bottom:16px">👤 Personal Details</h2>
      <table style="width:100%;border-collapse:collapse;font-size:.9rem">
        <tr><td style="padding:6px 0;color:#374280;width:40%"><strong>Full Name</strong></td><td>${firstName} ${lastName}</td></tr>
        <tr><td style="padding:6px 0;color:#374280"><strong>Email</strong></td><td><a href="mailto:${email}" style="color:#0887FE">${email}</a></td></tr>
        <tr><td style="padding:6px 0;color:#374280"><strong>Phone</strong></td><td>${phone}</td></tr>
        <tr><td style="padding:6px 0;color:#374280"><strong>City</strong></td><td>${city}${country ? ', ' + country : ''}</td></tr>
      </table>
      <h2 style="color:#121663;font-size:1rem;border-bottom:2px solid #EBF6FF;padding-bottom:10px;margin:24px 0 16px">💼 Role & Experience</h2>
      <table style="width:100%;border-collapse:collapse;font-size:.9rem">
        <tr><td style="padding:6px 0;color:#374280;width:40%"><strong>Position</strong></td><td>${position}</td></tr>
        <tr><td style="padding:6px 0;color:#374280"><strong>Experience</strong></td><td>${experience || '—'}</td></tr>
        <tr><td style="padding:6px 0;color:#374280"><strong>LinkedIn</strong></td><td>${linkedin ? '<a href="' + linkedin + '" style="color:#0887FE">' + linkedin + '</a>' : '—'}</td></tr>
        <tr><td style="padding:6px 0;color:#374280"><strong>Referral Source</strong></td><td>${referral || '—'}</td></tr>
      </table>
      <h2 style="color:#121663;font-size:1rem;border-bottom:2px solid #EBF6FF;padding-bottom:10px;margin:24px 0 16px">📝 Cover Letter</h2>
      <div style="background:#EBF6FF;border-radius:8px;padding:16px 20px;font-size:.9rem;line-height:1.6;color:#121663;white-space:pre-wrap">${coverLetter || '-'}</div>
      <p style="margin-top:28px;font-size:.8rem;color:#aaa;text-align:center">CV/Resume is attached to this email · Submitted via RankBait Careers Page</p>
    </div>
  </div>
  `;

  try {
    await resend.emails.send({
      from: 'RankBait Careers <onboarding@resend.dev>',
      to: process.env.RECEIVER_EMAIL,
      replyTo: email,
      subject: `[Application] ${position} — ${firstName} ${lastName}`,
      html: htmlBody,
      attachments: [{
        filename: cvFile.originalname,
        content: fs.readFileSync(cvFile.path)
      }]
    });
    fs.unlinkSync(cvFile.path);
    return res.json({ success: true });
  } catch (err) {
    console.error('Email send error:', err);
    if (cvFile && fs.existsSync(cvFile.path)) fs.unlinkSync(cvFile.path);
    return res.status(500).json({ success: false, error: 'Failed to send email.' });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on ${PORT}`);
});