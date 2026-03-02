# RankBait Careers Page
### Setup Guide

---

## 🛠️ Step-by-Step Setup

### STEP 1 — Install Node.js (if you don't have it)

1. Go to https://nodejs.org
2. Download and install the **LTS** version
3. Verify: open Terminal / Command Prompt and run:
   ```
   node -v
   npm -v
   ```
   Both should print a version number.

---

### STEP 2 — Set up Gmail App Password (so emails can be sent)

Gmail blocks direct password login from apps. You need an **App Password**.

1. Go to your Google Account → https://myaccount.google.com
2. Click **Security** in the left sidebar
3. Under "How you sign in to Google", enable **2-Step Verification** if not already on
4. Search for **"App Passwords"** in the search bar at the top
5. Select app: **Mail** → Select device: **Other (Custom name)** → type "RankBait"
6. Click **Generate** — Google gives you a **16-character code**
7. Copy that code — you'll need it in Step 3

---

### STEP 3 — Configure your .env file

1. In your project folder, create a `.env` file.
2. Open `.env` and fill in:

```env
GMAIL_USER=yourname@gmail.com       ← The Gmail you used to generate the App Password
GMAIL_PASS=      ← The 16-char App Password (no spaces) from Step 2
RECEIVER_EMAIL= ← Where you want to receive applications
PORT=3000
```

---

### STEP 4 — Install dependencies and run locally

In Terminal / Command Prompt, navigate to your project folder:

```bash
cd path/to/rankbait-careers

# Install all packages
npm install

# Start the server
npm start
```

You should see:
```
✅  RankBait careers server running → http://localhost:3000
```

Open your browser and go to **http://localhost:3000** — the page is live!

To stop the server: press `Ctrl + C`

---

### STEP 5 — Test the form

1. Fill in all required fields
2. Upload a PDF as your test CV
3. Click **Submit Application**
4. Check the inbox of your `RECEIVER_EMAIL` — you should receive a nicely formatted email with the CV attached

---

## 🌐 Hosting

### Option A — Railway.app (Recommended, easiest)

1. Go to https://railway.app and sign up (free)
2. Click **New Project → Deploy from GitHub repo**
3. Push your project to GitHub first:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   # Create a repo on github.com, then:
   git remote add origin https://github.com/YOUR_USERNAME/rankbait-careers.git
   git push -u origin main
   ```
4. In Railway, connect your GitHub repo
5. Railway auto-detects Node.js and runs `npm start`
6. Click **Variables** tab → add your 4 env variables:
   - `GMAIL_USER`
   - `GMAIL_PASS`
   - `RECEIVER_EMAIL`
   - `PORT` = `3000`
7. Railway gives you a free URL like `rankbait-careers.up.railway.app`

**Custom Domain on Railway (free):**
- Go to your project → Settings → Domains
- Click "Custom Domain" → enter `careers.rankbait.com` (or whatever you want)
- Railway gives you a DNS record to add in your domain registrar (Namecheap, GoDaddy, etc.)
- Add the CNAME record, wait a few minutes → done!

---

### Option B — Render.com (Also free)

1. Go to https://render.com → sign up
2. New → **Web Service** → connect GitHub repo
3. Set Build Command: `npm install`
4. Set Start Command: `npm start`
5. Add environment variables in the dashboard
6. Free plan gives you a `.onrender.com` URL
7. Custom domains: Settings → Custom Domains → add yours

---

## 📬 How Applications Arrive in Your Inbox

Each submission sends you an email that looks like:

```
Subject: [Application] Junior SEO — Jane Doe

┌─────────────────────────────────────────┐
│  ⬡ RankBait — New Application          │
│  Position: Junior SEO                   │
├─────────────────────────────────────────┤
│  👤 Personal Details                    │
│  Full Name: Jane Doe                    │
│  Email: jane@example.com               │
│  Phone: +1 555 000 0000                │
│  City: New York, US                    │
├─────────────────────────────────────────┤
│  💼 Role & Experience                   │
│  Experience: 1-3 years                 │
│                                         │
│                                        │
│  LinkedIn: linkedin.com/in/jane        │
├─────────────────────────────────────────┤
│  📝 Cover Letter                        │
│  [full text of their cover letter]     │
└─────────────────────────────────────────┘
📎 Attachment: jane_doe_cv.pdf
```

You can hit **Reply** and it goes directly to the applicant.

---


## 🔧 Troubleshooting

**"Email not sending"**
- Double-check your App Password in `.env` — no extra spaces
- Make sure 2FA is enabled on your Gmail account
- Check spam/junk folder in your receiver inbox

**"Error: ENOENT uploads/"**
- Create the uploads folder manually: `mkdir uploads`

**"Port already in use"**
- Change `PORT=3001` in `.env` and restart

**Form submits but page doesn't change**
- Open browser DevTools → Console tab → look for red errors
- Check Terminal for server errors

---

## ✏️ Customization

- **Change the email address:** Edit `RECEIVER_EMAIL` in `.env`
- **Add more positions:** Edit the `<select id="position">` in `index.html`
- **Change colors:** All colors are in `:root` variables at the top of `style.css`
- **Add more fields:** Add `<input>` in `index.html`, include the field name in the email template in `server.js`
