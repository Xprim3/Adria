# Railway "Not Found" Error - Troubleshooting

## Quick Checks

### 1. Check Railway Deployment Status

1. Go to Railway Dashboard → Your Project → Your Service
2. Check the **Deployments** tab
3. Look at the latest deployment:
   - ✅ **Green/Success** = Deployment successful
   - ❌ **Red/Failed** = Deployment failed (check logs)
   - ⏳ **In Progress** = Still deploying (wait)

### 2. Check Railway Logs

1. In Railway Dashboard → Your Service
2. Click on **Deployments** tab
3. Click on the latest deployment
4. Click **View Logs**
5. Look for errors or warnings

**Common Issues:**
- Server not starting
- Missing environment variables
- Port configuration issues
- Database connection errors

### 3. Verify Service is Running

1. In Railway Dashboard → Your Service
2. Check the status indicator:
   - **Green dot** = Service is running
   - **Red dot** = Service stopped/failed
   - **Yellow dot** = Service starting

### 4. Check the URL

Make sure you're using the correct URL format:
- ✅ Correct: `https://adria-production.up.railway.app/api/health`
- ❌ Wrong: `http://adria-production.up.railway.app` (missing https)
- ❌ Wrong: `adria-production.up.railway.app` (missing https://)

### 5. Test the Health Endpoint

Try these URLs:
1. `https://adria-production.up.railway.app/api/health`
2. `https://adria-production.up.railway.app/`

---

## Common Fixes

### Fix 1: Service Not Starting

**Check Start Command:**
1. Railway Dashboard → Your Service → **Settings**
2. Verify **Start Command** is: `npm start`
3. Save if changed

### Fix 2: Missing Environment Variables

**Add Required Variables:**
1. Railway Dashboard → Your Service → **Variables**
2. Add:
   - `NODE_ENV=production`
   - `PORT` (Railway sets this automatically, but you can verify)

### Fix 3: Check Server Code

The server should listen on `process.env.PORT`:
```javascript
const PORT = process.env.PORT || 3000
app.listen(PORT, ...)
```

### Fix 4: Database Issues

If you see database errors:
- SQLite might need a volume for persistence
- Check if `data/` directory exists
- Verify database path is correct

---

## What to Check in Logs

Look for these messages:
- ✅ `Server running on http://localhost:PORT`
- ✅ `Connected to SQLite database`
- ✅ `Database initialized successfully`
- ❌ `Error opening database`
- ❌ `Port already in use`
- ❌ `Cannot find module`

---

## Still Not Working?

1. **Share the Railway logs** - Copy the error messages
2. **Check deployment status** - Is it green or red?
3. **Verify the URL** - Make sure you're using `https://`
4. **Wait a moment** - Sometimes Railway needs a minute to fully start

