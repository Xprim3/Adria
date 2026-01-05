# Railway Environment Variables Setup

## Your Domain
- Domain: `pizzeriaadria-trier.de`
- With www: `www.pizzeriaadria-trier.de`
- **Important:** Use `https://` (not `http://`) for production

## Environment Variables to Add in Railway

Go to Railway Dashboard → Your Service → **Variables** tab

### 1. NODE_ENV
- **Name:** `NODE_ENV`
- **Value:** `production`

### 2. JWT_SECRET
- **Name:** `JWT_SECRET`
- **Value:** Generate a secure random string
  - Use: `openssl rand -base64 32` (in terminal)
  - Or use any long random string (at least 32 characters)
  - Example: `my-super-secret-jwt-key-1234567890abcdefghijklmnopqrstuvwxyz`

### 3. FRONTEND_URL
- **Name:** `FRONTEND_URL`
- **Value:** `https://pizzeriaadria-trier.de`
- **Important:** Use `https://` (not `http://`)
- **No trailing slash**

### 4. FRONTEND_URL_WWW
- **Name:** `FRONTEND_URL_WWW`
- **Value:** `https://www.pizzeriaadria-trier.de`
- **Important:** Use `https://` (not `http://`)
- **No trailing slash**

## After Adding Variables

1. Railway will automatically redeploy
2. Wait for deployment to complete
3. Test: `https://adria-production.up.railway.app/api/health`

---

## Note About HTTPS

Your current domain shows `http://` but for production:
- ✅ Use `https://` in environment variables
- ✅ STRATO should have SSL enabled (Let's Encrypt)
- ✅ Make sure SSL certificate is active in STRATO Control Panel

