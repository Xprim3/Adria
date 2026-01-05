# Upload Frontend to STRATO - Complete Guide

## Your Domain
- Domain: `pizzeriaadria-trier.de`
- Make sure SSL (HTTPS) is enabled in STRATO

---

## Step 1: Get SFTP Credentials from STRATO

1. **Log in to STRATO Control Panel:**
   - Go to: https://www.strato.de
   - Log in with your credentials

2. **Get FTP/SFTP Access:**
   - Go to **Webspace** → **FTP Access**
   - Note down:
     - **FTP Server:** (e.g., `ftp.strato.de` or `ftp.pizzeriaadria-trier.de`)
     - **Username:** (your FTP username)
     - **Password:** (your FTP password)
     - **Port:** Usually `21` for FTP or `22` for SFTP

---

## Step 2: Connect via SFTP Client

### Option A: FileZilla (Free, Recommended)

1. **Download FileZilla:**
   - https://filezilla-project.org/download.php?type=client
   - Install it

2. **Connect:**
   - Open FileZilla
   - Enter your FTP credentials:
     - **Host:** Your FTP server (from Step 1)
     - **Username:** Your FTP username
     - **Password:** Your FTP password
     - **Port:** `21` (FTP) or `22` (SFTP)
   - Click **Quickconnect**

3. **Navigate to Website Root:**
   - Usually: `htdocs/` or `www/` or `html/`
   - This is where your website files should go

### Option B: WinSCP (Windows)

1. Download WinSCP: https://winscp.net
2. Connect with same credentials
3. Navigate to website root

---

## Step 3: Prepare Files for Upload

Your files are ready in the `dist/` folder:
- Location: `C:\Users\Denis Januzi\Desktop\Adria\dist\`
- Contains: `index.html`, `assets/`, `images/`, etc.

**Also need:**
- `.htaccess` file (already created in project root)

---

## Step 4: Upload Files to STRATO

1. **In your SFTP client (FileZilla/WinSCP):**

2. **On the RIGHT side (Remote site - STRATO):**
   - Navigate to your website root (`htdocs/` or `www/`)

3. **On the LEFT side (Local site - Your computer):**
   - Navigate to: `C:\Users\Denis Januzi\Desktop\Adria\dist\`

4. **Delete existing files (if any):**
   - In STRATO root, select all files
   - Delete them (make a backup first if needed!)

5. **Upload all files from `dist/` folder:**
   - Select all files in `dist/` folder (left side)
   - Drag and drop to STRATO root (right side)
   - Wait for upload to complete

6. **Upload `.htaccess` file:**
   - Navigate to project root: `C:\Users\Denis Januzi\Desktop\Adria\`
   - Upload `.htaccess` to STRATO root

---

## Step 5: Verify File Structure on STRATO

Your STRATO root should look like:
```
htdocs/ (or www/)
├── index.html
├── .htaccess
├── assets/
│   ├── index-*.css
│   └── index-*.js
├── images/
│   └── hero/
└── favicon.ico
```

---

## Step 6: Enable SSL in STRATO

1. **Log in to STRATO Control Panel**
2. Go to **Domains** → **SSL Certificate**
3. Enable **Let's Encrypt SSL** (free)
4. Wait for activation (usually a few minutes)

---

## Step 7: Test Your Website

1. **Visit your website:**
   - `https://pizzeriaadria-trier.de`
   - `https://www.pizzeriaadria-trier.de`

2. **Test admin panel:**
   - `https://pizzeriaadria-trier.de/admin`

3. **Check browser console:**
   - Press F12 → Console tab
   - Look for any errors
   - Should see API calls to: `https://adria-production.up.railway.app`

---

## Troubleshooting

### 404 Errors on Routes
- Make sure `.htaccess` file is uploaded
- Check file permissions (should be 644)

### API Not Connecting
- Check browser console for CORS errors
- Verify Railway environment variables are set correctly
- Make sure Railway backend is running

### SSL Not Working
- Enable SSL in STRATO Control Panel
- Wait a few minutes for activation
- Clear browser cache

---

## Success Checklist

- [ ] SFTP credentials obtained
- [ ] Connected to STRATO via SFTP
- [ ] All files from `dist/` uploaded
- [ ] `.htaccess` file uploaded
- [ ] SSL certificate enabled
- [ ] Website loads at `https://pizzeriaadria-trier.de`
- [ ] Admin panel accessible
- [ ] API calls working (check browser console)

---

## Need Help?

If you encounter issues:
1. Check STRATO file structure
2. Verify `.htaccess` is uploaded
3. Check browser console for errors
4. Verify Railway backend is running

