# How to Get FTP Credentials from STRATO

## Step-by-Step Guide

### Step 1: Log In to STRATO Control Panel

1. Go to: **https://www.strato.de**
2. Click **"Anmelden"** (Login) in the top right
3. Enter your STRATO username and password
4. Click **"Anmelden"**

---

### Step 2: Navigate to FTP Access

Once logged in, you have a few ways to access FTP settings:

#### Option A: Via Webspace Management
1. Look for **"Webspace"** or **"Webhosting"** in the main menu
2. Click on it
3. Find **"FTP-Zugang"** or **"FTP Access"** or **"FTP-Verwaltung"**
4. Click on it

#### Option B: Via Domain Management
1. Look for **"Domains"** in the main menu
2. Click on your domain (`adriatrier.de`)
3. Look for **"FTP"** or **"FTP-Zugang"** section
4. Click on it

#### Option C: Direct Search
1. Use the search function in the control panel
2. Search for: **"FTP"** or **"FTP-Zugang"**
3. Click on the FTP access option

---

### Step 3: View FTP Credentials

Once in the FTP section, you should see:

**FTP Server / Host:**
- Usually: `ftp.strato.de` or `ftp.adriatrier.de`
- Or: `sftp.strato.de` (for SFTP)

**FTP Username:**
- Usually your STRATO username
- Or: `username@adriatrier.de` format
- Or: A specific FTP username

**FTP Password:**
- Your FTP password (may be different from your STRATO login password)
- Or: Same as your STRATO password

**Port:**
- **FTP:** Port `21`
- **SFTP:** Port `22`

**Directory / Path:**
- Usually: `htdocs/` or `www/` or `html/`
- This is where you upload your website files

---

### Step 4: Create FTP User (If Needed)

If you don't see FTP credentials, you may need to create an FTP user:

1. Look for **"FTP-Benutzer erstellen"** or **"Create FTP User"**
2. Click on it
3. Enter:
   - **Username:** (choose a username)
   - **Password:** (choose a secure password)
   - **Directory:** Usually `htdocs/` or root `/`
4. Click **"Erstellen"** or **"Create"**

---

### Step 5: Note Down Your Credentials

Write down or copy:
- ✅ FTP Server/Host
- ✅ FTP Username
- ✅ FTP Password
- ✅ Port (21 for FTP, 22 for SFTP)
- ✅ Directory path (htdocs/ or www/)

---

## Alternative: Check Email

STRATO may have sent you FTP credentials via email when you set up your hosting. Check your email for:
- Subject: "Ihre FTP-Zugangsdaten" or "Your FTP Access"
- Look for FTP server, username, and password

---

## If You Can't Find FTP Access

1. **Contact STRATO Support:**
   - Phone: Check STRATO website for support number
   - Email: support@strato.de
   - Live Chat: Available in control panel

2. **Check STRATO Help Center:**
   - Search for "FTP" or "FTP-Zugang"
   - Look for tutorials or guides

---

## Common STRATO FTP Settings

**FTP Server:**
- `ftp.strato.de`
- `ftp.adriatrier.de`
- `sftp.strato.de` (for SFTP)

**Port:**
- `21` (FTP)
- `22` (SFTP - more secure, recommended)

**Directory:**
- `htdocs/` (most common)
- `www/`
- `html/`
- `/` (root)

---

## Next Steps After Getting Credentials

1. Download FileZilla: https://filezilla-project.org
2. Connect using your FTP credentials
3. Navigate to your website root directory
4. Upload files from `dist/` folder

