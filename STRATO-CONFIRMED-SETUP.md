# STRATO Hosting Basic - Confirmed Setup Guide

## ✅ What STRATO Hosting Basic Supports

Based on STRATO's official documentation (www.strato.de):

**✅ SUPPORTED:**
- PHP, Perl, Python, Ruby
- MySQL databases
- SFTP file uploads
- Static files (HTML, CSS, JavaScript)
- SSL certificates
- 100 GB web space
- Unlimited traffic

**❌ NOT SUPPORTED:**
- Node.js applications
- Express.js servers
- Persistent Node.js processes

## 🎯 Your Project Requirements

Your Pizzeria Adria website needs:
- ✅ Frontend: Vue.js (static files after build) → **CAN go on STRATO**
- ❌ Backend: Node.js/Express → **CANNOT go on STRATO Basic**

## ✅ Solution: Hybrid Deployment

**Frontend on STRATO + Backend on Railway (Free)**

This is the **best solution** because:
- ✅ Uses your existing STRATO plan (no upgrade needed)
- ✅ Backend hosting is FREE (Railway free tier)
- ✅ Easy to maintain and update
- ✅ Professional setup

---

## Step-by-Step Deployment

### Part 1: Deploy Backend to Railway (5 minutes)

1. **Go to Railway:**
   - Visit: https://railway.app
   - Sign up with GitHub (free)

2. **Deploy Your Backend:**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository
   - Railway auto-detects Node.js ✅

3. **Configure Environment Variables:**
   In Railway dashboard → Variables, add:
   ```
   JWT_SECRET=generate-a-random-32-character-string
   NODE_ENV=production
   FRONTEND_URL=https://yourdomain.de
   FRONTEND_URL_WWW=https://www.yourdomain.de
   ```

4. **Get Your Backend URL:**
   - Railway provides a URL like: `https://pizzeria-adria-production.up.railway.app`
   - Copy this URL - you'll need it for the frontend

5. **Test Backend:**
   - Visit: `https://your-railway-url/api/health`
   - Should return: `{"status":"ok","message":"Server is running"}`

### Part 2: Prepare Frontend for STRATO

1. **Create `.env.production` file:**
   ```env
   VITE_API_URL=https://your-railway-url.up.railway.app/api
   ```
   Replace `your-railway-url` with your actual Railway URL.

2. **Build Frontend:**
   ```bash
   npm run build
   ```
   This creates optimized files in `dist/` folder.

3. **Verify Build:**
   - Check that `dist/` folder contains:
     - `index.html`
     - `assets/` folder with JS/CSS files

### Part 3: Upload to STRATO

1. **Get STRATO SFTP Credentials:**
   - Log into STRATO customer login
   - Go to: Hosting → SFTP Access
   - Note: Hostname, Username, Password

2. **Download FileZilla (Free):**
   - https://filezilla-project.org/
   - Install and open

3. **Connect to STRATO:**
   - Host: Your STRATO SFTP hostname
   - Username: Your SFTP username
   - Password: Your SFTP password
   - Port: 21 (or 22 for SFTP)

4. **Upload Files:**
   - Navigate to `/htdocs/` folder on STRATO
   - Upload **ALL contents** from `dist/` folder:
     - `index.html`
     - `assets/` folder (entire folder)
     - All other files
   
   **Important:** Upload the CONTENTS of `dist/`, not the `dist/` folder itself!

5. **Upload `.htaccess` file:**
   - Upload the `.htaccess` file (from project root) to `/htdocs/`
   - This file enables Vue Router to work correctly

### Part 4: Configure Domain on STRATO

1. **Point Domain:**
   - STRATO Control Panel → Domains
   - Ensure your domain points to your hosting

2. **Enable SSL:**
   - STRATO Control Panel → Security → SSL/TLS
   - Enable free Let's Encrypt certificate
   - Wait for activation (usually a few minutes)

3. **Test:**
   - Visit: `https://yourdomain.de`
   - Should see your website!

---

## File Structure on STRATO

After upload, your STRATO `/htdocs/` should look like:
```
/htdocs/
├── index.html
├── .htaccess
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── ...
└── (other static files)
```

**Do NOT upload:**
- ❌ `node_modules/`
- ❌ `src/` folder
- ❌ `server/` folder
- ❌ `package.json`
- ❌ `.env` files
- ❌ Development files

---

## Testing Checklist

After deployment, test:

- [ ] Website loads: `https://yourdomain.de`
- [ ] All pages work (navigation)
- [ ] Admin panel: `https://yourdomain.de/admin`
- [ ] Admin login works
- [ ] Content loads from API (check browser console)
- [ ] Images display correctly
- [ ] Mobile responsive
- [ ] SSL certificate active (green lock in browser)

---

## Updating Your Website

### To Update Frontend:
1. Make changes locally
2. Update `.env.production` if API URL changed
3. Rebuild: `npm run build`
4. Upload new `dist/` contents to STRATO `/htdocs/`

### To Update Backend:
- Railway auto-updates when you push to GitHub!
- Or manually redeploy in Railway dashboard

---

## Troubleshooting

### Website shows blank page:
- ✅ Check `.htaccess` file is uploaded
- ✅ Check file permissions (644 for files, 755 for folders)
- ✅ Check browser console for errors

### API calls fail:
- ✅ Verify `VITE_API_URL` in `.env.production` is correct
- ✅ Rebuild frontend after changing API URL
- ✅ Check Railway backend is running
- ✅ Check CORS settings (should auto-allow your domain)

### Images not loading:
- ✅ Check Railway backend `uploads/` folder
- ✅ Verify backend has write permissions
- ✅ Check image URLs in browser console

### Admin panel not working:
- ✅ Verify backend is running on Railway
- ✅ Check JWT_SECRET is set on Railway
- ✅ Check browser console for API errors
- ✅ Verify CORS allows your domain

---

## Cost Breakdown

**STRATO Hosting Basic:**
- ✅ Already paid for
- ✅ No additional cost

**Railway (Backend):**
- ✅ Free tier: $5 credit/month
- ✅ Usually enough for small-medium traffic
- ✅ Pay-as-you-go if you exceed

**Total Additional Cost:**
- 💰 **$0/month** (if within Railway free tier)

---

## Why This Setup Works

1. **STRATO Basic** = Perfect for static files (your Vue.js frontend)
2. **Railway** = Perfect for Node.js backend (free tier available)
3. **Separate deployment** = More flexible, easier updates
4. **No upgrade needed** = Use your existing STRATO plan

---

## Need Help?

- **STRATO Support:** Contact via STRATO customer login
- **Railway Support:** Check Railway documentation or Discord
- **Technical Issues:** Check browser console and Railway logs

---

## Next Steps

1. ✅ Deploy backend to Railway (5 min)
2. ✅ Build frontend with Railway URL (2 min)
3. ✅ Upload to STRATO via SFTP (5 min)
4. ✅ Configure domain and SSL (5 min)
5. ✅ Test everything (10 min)

**Total time: ~30 minutes** 🚀

