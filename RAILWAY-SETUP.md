# Railway Backend Setup - Step by Step Guide

This guide will help you deploy your backend to Railway and connect it with your STRATO frontend.

## Prerequisites

- A Railway account (sign up at https://railway.app - it's free to start)
- Your STRATO domain (e.g., `pizzeriaadria.de` or `www.pizzeriaadria.de`)
- GitHub account (if you want to connect via GitHub)

---

## Step 1: Prepare Your Project for Railway

### 1.1 Create a `railway.json` file (optional but recommended)

Railway will auto-detect Node.js, but we can specify the start command explicitly.

### 1.2 Ensure your `package.json` has a start script

Your `package.json` should have:
```json
"scripts": {
  "server": "node server/index.js"
}
```

Railway will automatically use `npm start` or `node server/index.js` if no start script is found.

---

## Step 2: Deploy to Railway

### Option A: Deploy via GitHub (Recommended)

1. **Push your code to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Prepare for Railway deployment"
   git push origin main
   ```

2. **Go to Railway Dashboard**:
   - Visit https://railway.app
   - Sign in with GitHub (recommended) or email

3. **Create a New Project**:
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository
   - Railway will automatically detect it's a Node.js project

4. **Configure the Service**:
   - Railway will auto-detect the root directory
   - **Root Directory**: Leave as `/` (root)
   - **Start Command**: Railway will auto-detect, but you can set it to `npm run server` or `node server/index.js`

### Option B: Deploy via Railway CLI

1. **Install Railway CLI**:
   ```bash
   npm install -g @railway/cli
   ```

2. **Login to Railway**:
   ```bash
   railway login
   ```

3. **Initialize and Deploy**:
   ```bash
   railway init
   railway up
   ```

---

## Step 3: Configure Environment Variables

In Railway Dashboard, go to your project → **Variables** tab and add:

### Required Variables:

1. **NODE_ENV**
   - Value: `production`

2. **PORT**
   - Value: Railway will set this automatically (usually `$PORT`)
   - Note: Railway provides `PORT` automatically, but you can leave it if your code uses `process.env.PORT || 3000`

3. **JWT_SECRET**
   - Value: Generate a secure random string (e.g., use: `openssl rand -base64 32`)
   - Example: `your-super-secret-jwt-key-change-this-to-something-random`

4. **FRONTEND_URL**
   - Value: Your STRATO domain URL (without www)
   - Example: `https://pizzeriaadria.de`
   - **Important**: Use `https://` and your actual domain

5. **FRONTEND_URL_WWW**
   - Value: Your STRATO domain URL with www
   - Example: `https://www.pizzeriaadria.de`
   - **Important**: Use `https://` and your actual domain

### Example Environment Variables:

```
NODE_ENV=production
JWT_SECRET=your-super-secret-jwt-key-change-this-to-something-random
FRONTEND_URL=https://pizzeriaadria.de
FRONTEND_URL_WWW=https://www.pizzeriaadria.de
```

### How to Add Variables in Railway:

1. Go to your project in Railway Dashboard
2. Click on your service
3. Go to **Variables** tab
4. Click **+ New Variable**
5. Add each variable one by one

---

## Step 4: Configure Database (SQLite)

Railway provides **ephemeral storage** by default, which means files are deleted when the service restarts.

### Option A: Use Railway Volume (Recommended for SQLite)

1. In Railway Dashboard, go to your service
2. Click **+ New** → **Volume**
3. Name it `data` (or `database`)
4. Mount it to `/app/data` (or wherever your database file is)
5. Update your database path in `server/database.js` to use the volume path

### Option B: Use Railway PostgreSQL (Better for Production)

Railway offers PostgreSQL databases. You can migrate from SQLite to PostgreSQL if needed.

For now, we'll use SQLite with a volume.

---

## Step 5: Get Your Railway Backend URL

After deployment:

1. Railway will provide a URL like: `https://your-project-name.up.railway.app`
2. Go to your service → **Settings** → **Domains**
3. You can add a custom domain, or use the Railway-provided URL
4. **Copy this URL** - you'll need it for the frontend

Example Railway URL: `https://adria-backend.up.railway.app`

---

## Step 6: Test Your Backend

1. Visit: `https://your-railway-url.up.railway.app/api/health`
2. You should see: `{"status":"ok","message":"Server is running"}`

If it works, your backend is live! ✅

---

## Step 7: Update Frontend to Use Railway Backend

### 7.1 Create `.env.production` file

Create a file named `.env.production` in your project root:

```env
VITE_API_URL=https://your-railway-url.up.railway.app
```

Replace `your-railway-url.up.railway.app` with your actual Railway URL.

### 7.2 Build Frontend with Railway URL

```bash
npm run build
```

This will create a `dist/` folder with the frontend pointing to your Railway backend.

---

## Step 8: Deploy Frontend to STRATO

Follow the instructions in `STRATO-CONFIRMED-SETUP.md` to upload the `dist/` folder to STRATO.

---

## Troubleshooting

### Backend not starting?

1. Check Railway logs: Go to your service → **Deployments** → Click on latest deployment → **View Logs**
2. Common issues:
   - Missing environment variables
   - Database path issues
   - Port configuration

### CORS Errors?

1. Make sure `FRONTEND_URL` and `FRONTEND_URL_WWW` are set correctly in Railway
2. Use `https://` (not `http://`)
3. Don't include trailing slashes

### Database not persisting?

1. Make sure you've created a Railway Volume
2. Check the mount path matches your database path in code

---

## Next Steps

1. ✅ Backend deployed to Railway
2. ✅ Environment variables configured
3. ✅ Frontend built with Railway URL
4. ✅ Frontend deployed to STRATO
5. 🎉 Your website is live!

---

## Support

If you encounter issues:
- Check Railway logs
- Verify environment variables
- Test the `/api/health` endpoint
- Check CORS configuration

