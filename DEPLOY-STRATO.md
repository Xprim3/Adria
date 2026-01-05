# Deploy to STRATO Hosting Basic - Complete Guide

This guide is specifically tailored for deploying your Pizzeria Adria website to STRATO Hosting Basic.

## ✅ Confirmed: STRATO Hosting Basic Capabilities

Based on STRATO's official information:

**STRATO Hosting Basic SUPPORTS:**
- ✅ PHP, Perl, Python, Ruby
- ✅ MySQL databases (on SSDs)
- ✅ SFTP access for file uploads
- ✅ Static files (HTML, CSS, JavaScript)
- ✅ SSL certificates (free Let's Encrypt)
- ✅ One-click CMS installations (WordPress, Joomla, etc.)
- ✅ 100 GB web space
- ✅ Unlimited traffic

**STRATO Hosting Basic DOES NOT SUPPORT:**
- ❌ Node.js applications
- ❌ Persistent server processes
- ❌ Custom server configurations

**For Node.js, STRATO requires:**
- VPS (Virtual Private Server) plan
- Dedicated server plan

## 🎯 Your Deployment Strategy

Since your project uses **Node.js/Express backend**, you have two options:

### Option 1: Separate Deployment (Recommended - No Upgrade Needed) ⭐
- **Frontend** → STRATO Hosting Basic (static files)
- **Backend** → Railway/Render (free Node.js hosting)

### Option 2: Upgrade STRATO Plan
- Upgrade to STRATO VPS
- Deploy both frontend and backend on VPS

### ✅ Confirmed: STRATO Basic Does NOT Support Node.js

Based on STRATO's official documentation, Hosting Basic does not support Node.js. You need to use **Option B** (separate backend hosting).

---

## Option A: STRATO VPS (If You Upgrade)

**Note:** This option requires upgrading to STRATO VPS plan. If you want to keep Basic plan, skip to Option B.

### Step 1: Prepare Your Project

1. **Build your frontend:**
   ```bash
   npm run build
   ```

2. **Create production `.env` file:**
   ```env
   PORT=3000
   JWT_SECRET=your-very-secure-secret-key-here
   NODE_ENV=production
   FRONTEND_URL=https://yourdomain.de
   FRONTEND_URL_WWW=https://www.yourdomain.de
   ```

3. **Generate secure JWT secret:**
   ```bash
   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
   ```
   Copy the output to your `.env` file as `JWT_SECRET`.

### Step 2: Upload Files via SFTP

**Get SFTP credentials from STRATO:**
- STRATO Control Panel → Hosting → SFTP Access
- Note: Hostname, Username, Password

**Using FileZilla (Free):**
1. Download: https://filezilla-project.org/
2. Connect with your SFTP credentials
3. Upload files:
   ```
   Local Files          →  STRATO Server Location
   dist/*               →  /htdocs/ (or /www/ or /public_html/)
   server/              →  /server/
   package.json         →  / (root)
   .env                 →  / (root)
   data/                →  /data/
   uploads/             →  /uploads/
   ```

### Step 3: Install Dependencies

**Via SSH (if available in STRATO):**
```bash
cd /path/to/your/project
npm install --legacy-peer-deps --production
```

**Or via STRATO Control Panel:**
- Look for "Terminal" or "SSH Access"
- Run npm install command

### Step 4: Start Application

**Via STRATO Node.js Manager:**
- Control Panel → Applications → Node.js
- Create new app
- Set startup file: `server/index.js`
- Start application

---

## Option B: Separate Frontend + Backend (Recommended) ⭐

**This is the recommended approach for STRATO Hosting Basic.**

Since STRATO Basic doesn't support Node.js, we'll deploy:
- **Frontend** → STRATO (static files) ✅ Uses your existing plan
- **Backend** → Railway/Render (free Node.js hosting) ✅ No cost

Since STRATO Basic likely doesn't support Node.js, we'll deploy:
- **Frontend** → STRATO (static files)
- **Backend** → Free Node.js hosting (Railway/Render)

### Part 1: Deploy Backend to Railway (Free & Easy)

#### Step 1: Create Railway Account
1. Go to https://railway.app
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository

#### Step 2: Configure Railway
1. Railway will auto-detect Node.js
2. Set root directory (if needed): Leave as root
3. Add environment variables in Railway dashboard:
   ```
   JWT_SECRET=your-very-secure-secret-key
   NODE_ENV=production
   PORT=3000
   FRONTEND_URL=https://yourdomain.de
   FRONTEND_URL_WWW=https://www.yourdomain.de
   ```

#### Step 3: Deploy
1. Railway will automatically deploy
2. Wait for deployment to complete
3. Get your backend URL (e.g., `https://pizzeria-adria-production.up.railway.app`)

#### Step 4: Update Frontend for Railway Backend

Create `.env.production` file:
```env
VITE_API_URL=https://your-railway-url.up.railway.app/api
```

**Or update `vite.config.ts` to use environment variable:**
```typescript
export default defineConfig({
  // ... existing config
  define: {
    'process.env.VITE_API_URL': JSON.stringify(process.env.VITE_API_URL || '/api')
  }
})
```

### Part 2: Deploy Frontend to STRATO

#### Step 1: Build Frontend with Updated API URL

```bash
# Set the API URL
export VITE_API_URL=https://your-railway-url.up.railway.app/api

# Or create .env.production file with:
# VITE_API_URL=https://your-railway-url.up.railway.app/api

# Build
npm run build
```

#### Step 2: Upload to STRATO via SFTP

**Using FileZilla:**
1. Connect to STRATO SFTP
2. Navigate to `/htdocs/` (or `/www/` or `/public_html/`)
3. Upload **ALL contents** of `dist/` folder:
   - `index.html`
   - `assets/` folder
   - All other files

#### Step 3: Create `.htaccess` for Vue Router

Create `.htaccess` file in `/htdocs/` with:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Don't rewrite files or directories
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  
  # Rewrite everything else to index.html
  RewriteRule ^(.*)$ index.html [L]
</IfModule>

# Enable compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

#### Step 4: Configure Domain & SSL

1. **In STRATO Control Panel:**
   - Go to Domains → Your Domain
   - Point domain to your hosting
   - Enable SSL certificate (STRATO provides free Let's Encrypt)

2. **Test your website:**
   - Visit `https://yourdomain.de`
   - Test admin panel: `https://yourdomain.de/admin`

### Part 3: Update CORS on Backend

Make sure your Railway backend allows your STRATO domain:

In Railway → Environment Variables, add:
```
FRONTEND_URL=https://yourdomain.de
FRONTEND_URL_WWW=https://www.yourdomain.de
```

The server code already handles this automatically!

---

## Alternative: Deploy Backend to Render (Free)

If Railway doesn't work, use Render:

1. Go to https://render.com
2. Sign up with GitHub
3. New → Web Service
4. Connect your repository
5. Settings:
   - Build Command: `npm install --legacy-peer-deps`
   - Start Command: `node server/index.js`
   - Environment: Node
6. Add environment variables
7. Deploy

---

## File Structure on STRATO

After deployment, your STRATO `/htdocs/` should contain:
```
/htdocs/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── ...
├── .htaccess
└── (other static files)
```

**Do NOT upload:**
- `node_modules/`
- `src/` folder
- `server/` folder (if using separate backend)
- `.env` files
- Development files

---

## Quick Deployment Checklist

### Backend (Railway/Render):
- [ ] Created account
- [ ] Connected GitHub repository
- [ ] Added environment variables
- [ ] Deployed successfully
- [ ] Got backend URL
- [ ] Tested API: `https://your-backend-url/api/health`

### Frontend (STRATO):
- [ ] Created `.env.production` with backend URL
- [ ] Built frontend: `npm run build`
- [ ] Uploaded `dist/` contents to `/htdocs/`
- [ ] Created `.htaccess` file
- [ ] Configured domain in STRATO
- [ ] Enabled SSL certificate
- [ ] Tested website loads correctly
- [ ] Tested admin panel works
- [ ] Tested API calls work

---

## Troubleshooting

### Frontend shows blank page:
- Check browser console for errors
- Verify `.htaccess` file is uploaded
- Check file permissions (should be 644 for files, 755 for folders)

### API calls fail:
- Verify `VITE_API_URL` is set correctly in `.env.production`
- Rebuild frontend after changing API URL
- Check CORS settings on backend
- Verify backend URL is accessible

### Images not uploading:
- Check `uploads/` folder permissions on backend (Railway/Render)
- Verify backend has write permissions
- Check file size limits

### Admin panel not working:
- Verify backend is running
- Check JWT_SECRET is set on backend
- Verify CORS allows your frontend domain
- Check browser console for errors

---

## STRATO-Specific Tips

1. **File Permissions:**
   - Files: 644
   - Folders: 755
   - Set via FileZilla or STRATO File Manager

2. **STRATO Control Panel Locations:**
   - SFTP Access: Hosting → SFTP
   - File Manager: Hosting → File Manager
   - Domains: Domains → Your Domain
   - SSL: Security → SSL/TLS Certificates

3. **Upload Limits:**
   - STRATO may have file upload size limits
   - Check STRATO documentation for limits
   - May need to adjust `php.ini` or contact support

---

## Need Help?

If you get stuck:
1. Check STRATO documentation
2. Contact STRATO support (they're usually helpful)
3. Check Railway/Render logs for backend issues
4. Verify all environment variables are set correctly

---

## Summary

**Recommended Approach (STRATO Basic):**
1. ✅ Deploy backend to Railway (free, easy, automatic)
2. ✅ Deploy frontend to STRATO (static files via SFTP)
3. ✅ Connect them via environment variables
4. ✅ Configure domain and SSL in STRATO

This gives you:
- ✅ Free backend hosting (Railway free tier)
- ✅ Your domain on STRATO
- ✅ Full functionality
- ✅ Easy updates (just rebuild and upload)
