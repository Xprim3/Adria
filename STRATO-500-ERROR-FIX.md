# Fix STRATO 500 Internal Server Error

## Problem
Getting "Internal Server Error" after disabling placeholder.

## Common Causes

### 1. .htaccess File Issues
- Syntax errors in .htaccess
- STRATO doesn't support some directives
- File permissions

### 2. PHP Errors
- Default index.php might have errors
- PHP version incompatibility

### 3. File Permissions
- Files not readable by web server

---

## Solutions

### Solution 1: Simplify .htaccess File

The current .htaccess might have directives STRATO doesn't support. Use a simpler version:

1. **In FileZilla:**
   - Go to your web root
   - Find `.htaccess` file
   - **Rename it** to `.htaccess.backup`
   - Upload the simplified version (see below)

2. **Simplified .htaccess content:**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### Solution 2: Check for index.php

1. **In FileZilla:**
   - Look for `index.php` in web root
   - **Rename it** to `index.php.old` or delete it
   - This ensures `index.html` is served

### Solution 3: Check File Permissions

1. **In FileZilla:**
   - Right-click on `index.html`
   - Select "File permissions" or "Properties"
   - Set to: `644` (readable by web server)
   - Apply to all files

### Solution 4: Temporarily Remove .htaccess

1. **In FileZilla:**
   - Rename `.htaccess` to `.htaccess.old`
   - Test website: `https://adriatrier.de`
   - If it works, the issue is with .htaccess
   - Then add back a simplified version

---

## Step-by-Step Fix

### Step 1: Remove/Rename Problem Files

1. **In FileZilla (STRATO side):**
   - Rename `.htaccess` to `.htaccess.backup`
   - Rename `index.php` to `index.php.old` (if exists)

### Step 2: Test Website

1. Visit: `https://adriatrier.de`
2. If it works, the issue was .htaccess
3. If still error, continue to Step 3

### Step 3: Add Simplified .htaccess

1. Create a new `.htaccess` file with only:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

2. Upload it to web root

### Step 4: Check STRATO Error Logs

1. **STRATO Control Panel:**
   - Look for "Error Logs" or "Logs"
   - Check for specific error messages
   - This will tell you exactly what's wrong

---

## Quick Test

1. **Temporarily remove .htaccess:**
   - Rename to `.htaccess.old`
   - Test website
   - If it works, add back simplified version

2. **Check index.php:**
   - Make sure it's renamed/deleted
   - Only `index.html` should be in root

---

## Still Not Working?

Contact STRATO support with:
- Error message
- What you were doing
- Ask them to check error logs for your domain

