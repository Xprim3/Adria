# Deployment Guide

## Issues Fixed

✅ **Fixed missing dependencies in package.json:**
- Added all server dependencies (express, cors, dotenv, sqlite3, bcryptjs, jsonwebtoken, multer)
- Added TypeScript type definitions
- Added concurrently for dev scripts

## GitHub Deployment Options

### Option 1: GitHub Pages (Frontend Only)

GitHub Pages can only host static files, so this will deploy the frontend only. The backend API would need to be hosted separately.

**Steps:**
1. Go to your repository Settings → Pages
2. Under "Source", select "GitHub Actions"
3. The workflow `.github/workflows/deploy-pages.yml` will automatically deploy on push to main/master

**Important Notes:**
- The frontend will be served from a subdirectory if your repo name isn't `username.github.io`
- Update `vite.config.ts` base path if needed (see below)
- API calls will need to point to your backend server URL

### Option 2: Full Stack Deployment

For a full-stack deployment (frontend + backend), you'll need:

1. **Frontend:** GitHub Pages, Netlify, Vercel, or similar
2. **Backend:** Railway, Render, Heroku, DigitalOcean, or similar

**Recommended Setup:**
- **Frontend:** Deploy to Vercel/Netlify (free tier available)
- **Backend:** Deploy to Railway or Render (free tier available)

## Environment Variables

Create a `.env` file for production:

```env
PORT=3000
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
NODE_ENV=production
VITE_API_URL=https://your-backend-url.com/api
```

## Build Commands

```bash
# Install dependencies
npm install

# Build frontend
npm run build

# Start server (production)
npm run server
```

## GitHub Actions Workflows

Two workflows have been created:

1. **`.github/workflows/ci.yml`** - Runs on every push/PR to test builds
2. **`.github/workflows/deploy-pages.yml`** - Deploys to GitHub Pages on push to main/master

## Troubleshooting

### Build Fails
- Make sure all dependencies are installed: `npm install`
- Check Node.js version (requires 18.x or 20.x)

### GitHub Pages Not Working
- Enable GitHub Pages in repository settings
- Select "GitHub Actions" as the source
- Check workflow runs in Actions tab

### API Not Working
- Update `VITE_API_URL` environment variable
- Ensure CORS is configured on backend
- Check backend server is running and accessible

## Next Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Test build locally:**
   ```bash
   npm run build
   ```

3. **Commit and push:**
   ```bash
   git add .
   git commit -m "Fix dependencies and add deployment workflows"
   git push
   ```

4. **Enable GitHub Pages** (if using Option 1):
   - Go to repository Settings → Pages
   - Select "GitHub Actions" as source

