# Fix CORS Error for Login

## Problem
Login fails with "Unexpected token '<', "<!DOCTYPE "... is not valid JSON" because CORS is blocking requests from `adriatrier.de`.

## Solution

### Step 1: Update Railway Environment Variables

In Railway Dashboard → Your Service → Variables, make sure you have:

```
NODE_ENV=production
JWT_SECRET=HN77Z2SnCHwb6i0mj3MvhJQxIg+QWJHVYQR58R+nmaU=
FRONTEND_URL=https://adriatrier.de
FRONTEND_URL_WWW=https://www.adriatrier.de
```

### Step 2: Redeploy Railway

After updating environment variables:
1. Railway will automatically redeploy
2. Wait for deployment to complete
3. Test login again

### Step 3: Verify CORS is Working

1. Open browser console (F12)
2. Go to Network tab
3. Try to log in
4. Check the login request:
   - Should go to: `https://adria-production.up.railway.app/api/auth/login`
   - Should return JSON (not HTML)
   - Status should be 200 (not 403/404)

---

## If Still Not Working

The server code has been updated to allow `adriatrier.de`. After Railway redeploys with the updated code, it should work.

---

## Quick Test

After Railway redeploys, test:
1. Visit: `https://adriatrier.de/#/admin`
2. Login with:
   - Username: `admin`
   - Password: `admin123`
3. Should work now!

