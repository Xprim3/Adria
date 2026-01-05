# Railway Quick Start - 5 Steps

Follow these steps to deploy your backend to Railway:

## Step 1: Sign Up for Railway
1. Go to https://railway.app
2. Click "Start a New Project"
3. Sign in with GitHub (recommended) or email

## Step 2: Deploy from GitHub
1. Click "New Project" → "Deploy from GitHub repo"
2. Select your repository
3. Railway will auto-detect Node.js

## Step 3: Add Environment Variables
In Railway Dashboard → Your Project → Variables tab, add:

```
NODE_ENV=production
JWT_SECRET=your-random-secret-key-here
FRONTEND_URL=https://yourdomain.de
FRONTEND_URL_WWW=https://www.yourdomain.de
```

**Generate JWT_SECRET:**
- Use: `openssl rand -base64 32` (in terminal)
- Or use any long random string

## Step 4: Get Your Railway URL
1. After deployment, Railway gives you a URL like: `https://your-project.up.railway.app`
2. Test it: Visit `https://your-project.up.railway.app/api/health`
3. Should see: `{"status":"ok","message":"Server is running"}`

## Step 5: Update Frontend
1. Create `.env.production` file:
   ```
   VITE_API_URL=https://your-project.up.railway.app
   ```

2. Build frontend:
   ```bash
   npm run build
   ```

3. Upload `dist/` folder to STRATO (see STRATO-CONFIRMED-SETUP.md)

---

**Done!** Your backend is on Railway, frontend on STRATO. 🎉

