# Update Railway Environment Variables for New Domain

## Your New Domain
- Domain: `adriatrier.de`
- With www: `www.adriatrier.de` (if applicable)

## Update Environment Variables in Railway

Go to Railway Dashboard → Your Service → **Variables** tab

### Update These Variables:

**FRONTEND_URL**
- **Name:** `FRONTEND_URL`
- **Value:** `https://adriatrier.de`
- **Important:** Use `https://` (not `http://`)
- **No trailing slash**

**FRONTEND_URL_WWW** (if you use www)
- **Name:** `FRONTEND_URL_WWW`
- **Value:** `https://www.adriatrier.de`
- **Important:** Use `https://` (not `http://`)
- **No trailing slash**

### Keep These Variables:

**NODE_ENV**
- **Name:** `NODE_ENV`
- **Value:** `production`

**JWT_SECRET**
- **Name:** `JWT_SECRET`
- **Value:** `HN77Z2SnCHwb6i0mj3MvhJQxIg+QWJHVYQR58R+nmaU=`

## After Updating

1. Railway will automatically redeploy
2. Wait for deployment to complete
3. Test: `https://adria-production.up.railway.app/api/health`

