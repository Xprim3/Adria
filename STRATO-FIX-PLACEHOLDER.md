# Fix STRATO Placeholder Page Issue

## Problem
Website shows STRATO placeholder: "This domain is now reserved. As of now, no content has been uploaded."

## Possible Causes

### 1. Default STRATO index.php is taking precedence
STRATO might have a default `index.php` that's being served before your `index.html`.

### 2. Files uploaded to wrong directory
Files might be in a subdirectory instead of the web root.

### 3. Domain not pointing to correct directory
Domain might not be configured to point to where you uploaded files.

---

## Solutions

### Solution 1: Delete or Rename Default STRATO Files

1. **In FileZilla (STRATO side):**
   - Look for any `index.php` file in the web root
   - **Rename it** to `index.php.old` (or delete it)
   - This will allow your `index.html` to be served

2. **Make sure your `index.html` is in the root:**
   - Your `index.html` should be in the same directory as `cgi-bin/`
   - Not in a subfolder

### Solution 2: Check File Structure

**In FileZilla, verify:**
- Your `index.html` is in the root directory (same level as `cgi-bin/`)
- Your `assets/` folder is there
- Your `.htaccess` file is there
- No `index.php` file (or it's renamed)

### Solution 3: Configure Domain in STRATO

1. **Log in to STRATO Control Panel**
2. Go to **Domains** → **Domain Management**
3. Make sure `adriatrier.de` is pointing to your webspace
4. Check if there's a "Document Root" or "Web Root" setting
5. Make sure it's set to the correct directory

### Solution 4: Check .htaccess File

Make sure your `.htaccess` file is uploaded and contains:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## Quick Fix Steps

1. **In FileZilla:**
   - Go to your web root (where `cgi-bin/` is)
   - Look for `index.php` - rename it to `index.php.old`
   - Make sure your `index.html` is there
   - Make sure `.htaccess` is there

2. **Clear browser cache:**
   - Press `Ctrl+F5` to hard refresh
   - Or try incognito/private window

3. **Wait a few minutes:**
   - STRATO might need a moment to update

4. **Test again:**
   - Visit: `https://adriatrier.de`
   - Should see your website now

