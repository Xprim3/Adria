# Railway Setup - Complete Step-by-Step Guide

Follow these steps in order to deploy your backend to Railway and connect it with STRATO.

---

## 🚀 PART 1: Deploy Backend to Railway

### Step 1: Sign Up / Log In to Railway

1. Go to **https://railway.app**
2. Click **"Start a New Project"** or **"Log In"**
3. Sign in with **GitHub** (recommended) or email

### Step 2: Create New Project

1. In Railway Dashboard, click **"New Project"**
2. Select **"Deploy from GitHub repo"**
3. Authorize Railway to access your GitHub (if first time)
4. Select your **Adria** repository
5. Railway will automatically detect it's a Node.js project

### Step 3: Configure Environment Variables

**Important:** You need to add these variables BEFORE the first deployment.

1. In Railway Dashboard, click on your **project**
2. Click on the **service** (your app)
3. Go to **Variables** tab
4. Click **"+ New Variable"** and add each one:

#### Variable 1: NODE_ENV
- **Name:** `NODE_ENV`
- **Value:** `production`

#### Variable 2: JWT_SECRET
- **Name:** `JWT_SECRET`
- **Value:** Generate a secure random string
  - **Option A:** Use terminal: `openssl rand -base64 32`
  - **Option B:** Use any long random string (at least 32 characters)
  - Example: `my-super-secret-jwt-key-1234567890abcdefghijklmnopqrstuvwxyz`

#### Variable 3: FRONTEND_URL
- **Name:** `FRONTEND_URL`
- **Value:** Your STRATO domain (without www)
- Example: `https://pizzeriaadria.de`
- **Important:** Use `https://` (not `http://`)

#### Variable 4: FRONTEND_URL_WWW
- **Name:** `FRONTEND_URL_WWW`
- **Value:** Your STRATO domain (with www)
- Example: `https://www.pizzeriaadria.de`
- **Important:** Use `https://` (not `http://`)

**Note:** Railway automatically provides `PORT`, so you don't need to set it.

### Step 4: Wait for Deployment

1. Railway will automatically start building and deploying
2. Watch the **Deployments** tab for progress
3. Wait until you see **"Deploy Successful"** ✅

### Step 5: Get Your Railway URL

1. After successful deployment, go to **Settings** tab
2. Scroll to **Domains** section
3. You'll see a Railway-provided URL like: `https://your-project-name.up.railway.app`
4. **Copy this URL** - you'll need it for the frontend!

### Step 6: Test Your Backend

1. Open a new browser tab
2. Visit: `https://your-railway-url.up.railway.app/api/health`
3. You should see: `{"status":"ok","message":"Server is running"}`
4. If you see this, your backend is working! ✅

---

## 🎨 PART 2: Connect Frontend to Railway Backend

### Step 7: Create Production Environment File

1. In your project root, create a file named `.env.production`
2. Add this content (replace with your Railway URL):

```env
VITE_API_URL=https://your-railway-url.up.railway.app
```

**Example:**
```env
VITE_API_URL=https://adria-backend.up.railway.app
```

### Step 8: Build Frontend

1. Open terminal in your project folder
2. Run:
   ```bash
   npm run build
   ```
3. Wait for build to complete
4. This creates a `dist/` folder with your frontend

---

## 📤 PART 3: Deploy Frontend to STRATO

### Step 9: Prepare Files for STRATO

1. You should have a `dist/` folder after building
2. You should also have a `.htaccess` file (already created)
3. Make sure both are ready

### Step 10: Upload to STRATO via SFTP

1. **Get SFTP credentials from STRATO:**
   - Log in to STRATO Control Panel
   - Go to **Webspace** → **FTP Access**
   - Note your:
     - **FTP Server** (e.g., `ftp.strato.de`)
     - **Username**
     - **Password**

2. **Connect via SFTP client:**
   - Use FileZilla, WinSCP, or any SFTP client
   - Connect to your STRATO server

3. **Upload files:**
   - Navigate to your website's root directory (usually `htdocs/` or `www/`)
   - **Delete all existing files** (if any)
   - Upload **ALL contents** of your `dist/` folder
   - Upload `.htaccess` file to the root

4. **File structure on STRATO should be:**
   ```
   htdocs/
   ├── index.html
   ├── .htaccess
   ├── assets/
   ├── images/
   └── ... (all other files from dist/)
   ```

### Step 11: Configure Domain in STRATO

1. In STRATO Control Panel, go to **Domains**
2. Make sure your domain points to your webspace
3. Enable **SSL certificate** (Let's Encrypt - free)

### Step 12: Test Your Website

1. Visit your domain: `https://yourdomain.de`
2. Test the admin panel: `https://yourdomain.de/admin`
3. Make sure API calls work (check browser console for errors)

---

## ✅ Verification Checklist

- [ ] Backend deployed to Railway
- [ ] Environment variables set in Railway
- [ ] Backend health check works (`/api/health`)
- [ ] `.env.production` file created with Railway URL
- [ ] Frontend built successfully (`npm run build`)
- [ ] Files uploaded to STRATO
- [ ] `.htaccess` file uploaded
- [ ] Domain configured in STRATO
- [ ] SSL certificate enabled
- [ ] Website loads correctly
- [ ] Admin panel accessible

---

## 🔧 Troubleshooting

### Backend Issues

**Problem:** Backend not starting
- **Solution:** Check Railway logs (Deployments → View Logs)
- Check environment variables are set correctly

**Problem:** CORS errors
- **Solution:** Verify `FRONTEND_URL` and `FRONTEND_URL_WWW` are correct
- Make sure they use `https://` (not `http://`)
- No trailing slashes

**Problem:** Database errors
- **Solution:** Railway uses ephemeral storage by default
- For production, consider using Railway PostgreSQL or a volume

### Frontend Issues

**Problem:** API calls fail
- **Solution:** Check `.env.production` has correct Railway URL
- Rebuild frontend: `npm run build`
- Check browser console for errors

**Problem:** 404 errors on routes
- **Solution:** Make sure `.htaccess` file is uploaded to STRATO root

**Problem:** Website not loading
- **Solution:** Check STRATO file structure
- Verify `index.html` is in root directory
- Check SSL certificate is enabled

---

## 📞 Need Help?

1. Check Railway logs for backend issues
2. Check browser console for frontend issues
3. Verify all environment variables are set
4. Test the `/api/health` endpoint directly

---

## 🎉 Success!

Once everything is working:
- Your backend is on Railway
- Your frontend is on STRATO
- They're connected and working together!

