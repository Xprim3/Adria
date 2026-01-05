# Quick Fix: GitHub Pages Error

## The Error
```
Error: Create Pages site failed
Error: HttpError: Resource not accessible by integration
```

## The Solution

**You MUST enable GitHub Pages manually first.** GitHub Actions cannot do this automatically.

### Step-by-Step Fix:

1. **Go to your repository on GitHub**
   - Navigate to: `https://github.com/your-username/your-repo`

2. **Click "Settings"** (top menu bar)

3. **Click "Pages"** (left sidebar, under "Code and automation")

4. **Under "Source":**
   - Select: **"GitHub Actions"**
   - Click **"Save"**

5. **Wait 1-2 minutes** for GitHub to set up Pages

6. **Push the updated workflow:**
   ```bash
   git add .github/workflows/deploy-pages.yml
   git commit -m "Remove auto-configure Pages step"
   git push
   ```

7. **The workflow will now work!**

## What Changed

- Removed the `configure-pages` step that was causing the error
- The workflow now assumes Pages is already enabled
- Once you enable Pages manually, deployments will work automatically

## Verify It's Working

After enabling Pages and pushing:
1. Go to **Actions** tab
2. You should see the workflow running successfully
3. After completion, your site will be at: `https://your-username.github.io/your-repo-name/`

## Still Having Issues?

If Pages is enabled but still not working:
1. Check repository visibility (private repos need GitHub Pro)
2. Ensure the branch name matches (`main` or `master`)
3. Check Actions permissions in Settings → Actions → General

## Alternative: Use Vercel

If GitHub Pages continues to be problematic:
- Go to [vercel.com](https://vercel.com)
- Import your repository
- Auto-deploys with zero configuration
- Free and works immediately

