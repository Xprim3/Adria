# Fix Railway Deployment Error

## Problem
Railway is trying to use `npm ci` which requires `package-lock.json` to be perfectly in sync with `package.json`. This is failing.

## Solution
We've configured Railway to use `npm install --legacy-peer-deps` instead.

## Files Created/Updated
1. ✅ `nixpacks.toml` - Tells Railway to use `npm install --legacy-peer-deps`
2. ✅ `railway.json` - Updated build command

## Next Steps

### Option 1: Commit and Push (Recommended)
1. Make sure your updated `package-lock.json` is committed:
   ```bash
   git add package-lock.json railway.json nixpacks.toml
   git commit -m "Fix Railway deployment: use npm install instead of npm ci"
   git push origin main
   ```

2. Railway will automatically redeploy with the new configuration

### Option 2: Configure in Railway Dashboard
If you can't push right now, you can configure it in Railway:

1. Go to Railway Dashboard → Your Project → Your Service
2. Go to **Settings** tab
3. Under **Build Command**, set:
   ```
   npm install --legacy-peer-deps
   ```
4. Under **Start Command**, set:
   ```
   npm start
   ```
5. Click **Save**
6. Railway will redeploy automatically

## Verify
After redeployment, check the logs to see:
- ✅ `npm install --legacy-peer-deps` running (instead of `npm ci`)
- ✅ Packages installing successfully
- ✅ Server starting with `npm start`

