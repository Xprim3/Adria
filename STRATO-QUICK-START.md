# STRATO Quick Start Guide - 5 Steps

## ⚡ Fastest Way to Deploy to STRATO

Since STRATO Basic likely doesn't support Node.js, here's the quickest solution:

### Step 1: Deploy Backend to Railway (5 minutes)

1. Go to https://railway.app
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Add environment variables:
   ```
   JWT_SECRET=generate-a-random-32-character-string
   NODE_ENV=production
   ```
6. Railway auto-deploys! ✅
7. Copy your Railway URL (e.g., `https://pizzeria-adria-production.up.railway.app`)

### Step 2: Update Frontend API URL

Create `.env.production` file in your project root:
```env
VITE_API_URL=https://your-railway-url.up.railway.app/api
```

Replace `your-railway-url` with your actual Railway URL.

### Step 3: Build Frontend

```bash
npm run build
```

This creates optimized files in `dist/` folder.

### Step 4: Upload to STRATO

1. **Get SFTP credentials from STRATO:**
   - STRATO Control Panel → Hosting → SFTP Access

2. **Using FileZilla:**
   - Connect to STRATO SFTP
   - Navigate to `/htdocs/` folder
   - Upload **ALL contents** from `dist/` folder

3. **Create `.htaccess` file** in `/htdocs/`:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule ^(.*)$ index.html [L]
   </IfModule>
   ```

### Step 5: Configure Domain

1. STRATO Control Panel → Domains
2. Point your domain to hosting
3. Enable SSL certificate (free Let's Encrypt)

**Done! 🎉**

Your website should now be live at `https://yourdomain.de`

---

## Update CORS on Backend

In Railway dashboard → Environment Variables, add:
```
FRONTEND_URL=https://yourdomain.de
FRONTEND_URL_WWW=https://www.yourdomain.de
```

The server will automatically allow these domains.

---

## Testing Checklist

- [ ] Website loads: `https://yourdomain.de`
- [ ] Admin panel works: `https://yourdomain.de/admin`
- [ ] API calls work (check browser console)
- [ ] Images load correctly
- [ ] Mobile responsive

---

## Need to Update?

**To update your website:**
1. Make changes locally
2. Rebuild: `npm run build`
3. Upload new `dist/` contents to STRATO `/htdocs/`

**To update backend:**
- Railway auto-updates when you push to GitHub!

---

## Troubleshooting

**Frontend blank page?**
- Check `.htaccess` file exists
- Check browser console for errors

**API not working?**
- Verify `VITE_API_URL` in `.env.production`
- Rebuild after changing API URL
- Check Railway backend is running

**Need help?** See `DEPLOY-STRATO.md` for detailed guide.

