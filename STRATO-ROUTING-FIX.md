# Fix Vue Router on STRATO - Complete Guide

Based on research, STRATO uses Apache servers and **DOES support** `.htaccess` files and `mod_rewrite`. Here's how to fix it:

## ✅ Confirmed: STRATO Supports .htaccess

STRATO hosting uses Apache, which supports:
- ✅ `.htaccess` files
- ✅ `mod_rewrite` module
- ✅ URL rewriting

---

## Step-by-Step Fix

### Step 1: Verify .htaccess File

1. **Check file name:**
   - Must be exactly `.htaccess` (with dot at the start)
   - No file extension
   - Case sensitive

2. **Check file location:**
   - Must be in web root (same level as `index.html`)
   - Same directory as `assets/` folder

3. **Check file permissions:**
   - Should be `644` (readable by web server)
   - In FileZilla: Right-click → File permissions → Set to `644`

### Step 2: Upload Correct .htaccess

The `.htaccess` file I created should work. Make sure to:

1. **Upload to STRATO web root:**
   - Location: Same directory as `index.html`
   - Replace any existing `.htaccess` file

2. **Verify content:**
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteCond %{REQUEST_URI} !^/api
     RewriteRule . /index.html [L]
   </IfModule>
   ```

### Step 3: Switch Back to History Mode

Since STRATO supports `.htaccess`, we can use clean URLs. Change the router back:

**In `src/router/index.ts`:**
```typescript
import { createRouter, createWebHistory } from 'vue-router'
// ... rest of code
const router = createRouter({
  history: createWebHistory(),  // Changed back from createWebHashHistory()
  routes,
})
```

### Step 4: Rebuild and Upload

1. **Rebuild:**
   ```bash
   npm run build
   ```

2. **Upload new files:**
   - Upload new `dist/` folder contents
   - Upload `.htaccess` file

### Step 5: Test

1. **Clear browser cache** (Ctrl+Shift+Delete)
2. **Test admin route:** `https://adriatrier.de/admin`
3. **Should work now!**

---

## Troubleshooting

### If .htaccess Still Doesn't Work

1. **Check STRATO Control Panel:**
   - Look for "Apache Configuration"
   - Look for "mod_rewrite" settings
   - Enable if available

2. **Test if .htaccess is working:**
   - Create `test.txt` with content: "Hello"
   - Add to `.htaccess`: `RewriteRule ^test$ test.txt [L]`
   - Visit: `https://adriatrier.de/test`
   - If you see "Hello", `.htaccess` works

3. **Check file permissions:**
   - `.htaccess` should be `644`
   - `index.html` should be `644`

4. **Contact STRATO Support:**
   - Ask: "Is mod_rewrite enabled on my hosting?"
   - Ask: "Are .htaccess files supported?"
   - Provide your domain: `adriatrier.de`

---

## Alternative: Keep Hash Mode

If `.htaccess` still doesn't work after trying everything:

- Keep the hash router mode (already implemented)
- Admin URL: `https://adriatrier.de/#/admin`
- Works without server configuration
- Less clean URLs but 100% reliable

---

## Recommended Action

1. ✅ Upload the `.htaccess` file I created
2. ✅ Switch router back to `createWebHistory()`
3. ✅ Rebuild and upload
4. ✅ Test: `https://adriatrier.de/admin`
5. ✅ If still not working, contact STRATO support

