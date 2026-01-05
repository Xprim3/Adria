# Next Steps After Railway Deployment

## ✅ Step 1: Wait for Deployment to Complete

1. Watch the Railway deployment logs
2. Wait until you see: **"Deploy Successful"** ✅
3. The service should show as **"Active"**

---

## 🔗 Step 2: Get Your Railway Backend URL

1. In Railway Dashboard → Your Service
2. Go to **Settings** tab
3. Scroll to **Domains** section
4. You'll see a Railway-provided URL like:
   - `https://your-project-name.up.railway.app`
5. **Copy this URL** - you'll need it!

---

## 🧪 Step 3: Test Your Backend

1. Open a new browser tab
2. Visit: `https://your-railway-url.up.railway.app/api/health`
3. You should see: `{"status":"ok","message":"Server is running"}`
4. If you see this, your backend is working! ✅

---

## ⚙️ Step 4: Configure Environment Variables (IMPORTANT!)

If you haven't done this yet, add these in Railway:

1. Go to Railway Dashboard → Your Service → **Variables** tab
2. Click **"+ New Variable"** and add each:

### Required Variables:

**NODE_ENV**
- Value: `production`

**JWT_SECRET**
- Value: Generate a random string (at least 32 characters)
- Example: `my-super-secret-jwt-key-1234567890abcdefghijklmnopqrstuvwxyz`
- Or use: `openssl rand -base64 32` (in terminal)

**FRONTEND_URL**
- Value: Your STRATO domain (without www)
- Example: `https://pizzeriaadria.de`
- **Important:** Use `https://` (not `http://`)

**FRONTEND_URL_WWW**
- Value: Your STRATO domain (with www)
- Example: `https://www.pizzeriaadria.de`
- **Important:** Use `https://` (not `http://`)

3. After adding variables, Railway will automatically redeploy

---

## 🎨 Step 5: Update Frontend to Use Railway Backend

1. **Create `.env.production` file** in your project root:
   ```env
   VITE_API_URL=https://your-railway-url.up.railway.app
   ```
   Replace `your-railway-url.up.railway.app` with your actual Railway URL

2. **Build the frontend:**
   ```bash
   npm run build
   ```
   This creates a `dist/` folder with your frontend pointing to Railway

---

## 📤 Step 6: Deploy Frontend to STRATO

1. **Get SFTP credentials from STRATO:**
   - Log in to STRATO Control Panel
   - Go to **Webspace** → **FTP Access**
   - Note your FTP server, username, and password

2. **Connect via SFTP client** (FileZilla, WinSCP, etc.)

3. **Upload files:**
   - Navigate to your website root (usually `htdocs/` or `www/`)
   - **Delete all existing files** (if any)
   - Upload **ALL contents** of your `dist/` folder
   - Upload `.htaccess` file to root

4. **File structure should be:**
   ```
   htdocs/
   ├── index.html
   ├── .htaccess
   ├── assets/
   ├── images/
   └── ... (all other files)
   ```

---

## ✅ Step 7: Test Your Website

1. Visit your domain: `https://yourdomain.de`
2. Test the admin panel: `https://yourdomain.de/admin`
3. Check browser console for any errors
4. Make sure API calls work

---

## 🎉 Success Checklist

- [ ] Railway backend deployed successfully
- [ ] Backend health check works (`/api/health`)
- [ ] Environment variables configured
- [ ] `.env.production` file created with Railway URL
- [ ] Frontend built successfully
- [ ] Files uploaded to STRATO
- [ ] `.htaccess` file uploaded
- [ ] Website loads correctly
- [ ] Admin panel accessible

---

## 🆘 Troubleshooting

**Backend not responding?**
- Check Railway logs
- Verify environment variables are set
- Test `/api/health` endpoint directly

**CORS errors?**
- Make sure `FRONTEND_URL` and `FRONTEND_URL_WWW` are correct
- Use `https://` (not `http://`)
- No trailing slashes

**Frontend not connecting to backend?**
- Check `.env.production` has correct Railway URL
- Rebuild frontend: `npm run build`
- Check browser console for errors

