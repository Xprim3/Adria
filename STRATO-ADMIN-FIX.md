# Fix Admin Route 404 on STRATO

## Problem
The `/admin` route shows "404 Not Found" even though `.htaccess` is configured.

## Possible Causes

### 1. STRATO doesn't support mod_rewrite
Some STRATO plans don't support `.htaccess` or `mod_rewrite`.

### 2. `.htaccess` file not being read
The file might not be uploaded correctly or STRATO might ignore it.

### 3. Different STRATO configuration needed
STRATO might require a different format or configuration.

---

## Solutions

### Solution 1: Verify `.htaccess` is uploaded

1. **In FileZilla:**
   - Make sure `.htaccess` is in the web root (same level as `index.html`)
   - Check file permissions (should be 644)
   - Make sure the filename is exactly `.htaccess` (with the dot at the start)

2. **Verify file content:**
   - Open `.htaccess` in FileZilla
   - Make sure it contains the rewrite rules

### Solution 2: Check STRATO Support

1. **Contact STRATO Support:**
   - Ask if they support `.htaccess` files
   - Ask if `mod_rewrite` is enabled
   - Ask if there are any restrictions

2. **Check STRATO Control Panel:**
   - Look for "Apache Configuration" or "mod_rewrite" settings
   - Enable if available

### Solution 3: Alternative - Use Hash Router (Temporary Fix)

If `.htaccess` doesn't work, we can switch Vue Router to use hash mode:

**Change in `src/router/index.ts`:**
```typescript
// Change from:
history: createWebHistory(),

// To:
history: createWebHashHistory(),
```

Then rebuild and upload. The admin route would be: `https://adriatrier.de/#/admin`

**Pros:** Works without server configuration
**Cons:** URLs have `#` in them (less clean)

### Solution 4: Check STRATO Error Logs

1. **In STRATO Control Panel:**
   - Look for "Error Logs" or "Logs"
   - Check for `.htaccess` related errors
   - This will tell you if `.htaccess` is being read

---

## Quick Test

1. **Create a test file:**
   - Create `test.php` with: `<?php phpinfo(); ?>`
   - Upload to STRATO
   - Visit: `https://adriatrier.de/test.php`
   - Look for "mod_rewrite" in the output
   - If you see it, it's enabled

2. **Test `.htaccess`:**
   - Create `test.txt` in web root
   - Add to `.htaccess`: `RewriteRule ^test$ test.txt [L]`
   - Visit: `https://adriatrier.de/test`
   - If it shows test.txt content, `.htaccess` works

---

## Recommended Next Steps

1. **Upload the updated `.htaccess` file** (I've created a new version)
2. **Test the admin route again**
3. **If still not working:**
   - Contact STRATO support to ask about mod_rewrite
   - Or switch to hash router mode (Solution 3)

---

## If Nothing Works

We can switch to **Hash Router** mode which doesn't require server configuration. The URLs will be:
- Home: `https://adriatrier.de/#/`
- Admin: `https://adriatrier.de/#/admin`

This works on any hosting without special configuration.

