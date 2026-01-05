# GitHub Pages Setup Instructions

## Error: "Get Pages site failed"

This error occurs when GitHub Pages is not enabled for your repository. Follow these steps to fix it:

## Option 1: Enable GitHub Pages Manually (Recommended)

1. Go to your repository on GitHub
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **"GitHub Actions"**
5. Click **Save**

## Option 2: Use the Workflow with Auto-Enable

The workflow has been updated to automatically enable Pages, but you may still need to:

1. Ensure your repository has the correct permissions:
   - Go to **Settings** → **Actions** → **General**
   - Under **Workflow permissions**, select **"Read and write permissions"**
   - Check **"Allow GitHub Actions to create and approve pull requests"**
   - Click **Save**

2. Push the updated workflow:
   ```bash
   git add .github/workflows/deploy-pages.yml
   git commit -m "Update Pages workflow with auto-enablement"
   git push
   ```

## Option 3: Alternative Deployment (If Pages Still Fails)

If GitHub Pages continues to have issues, consider using **Vercel** instead:

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click **"Add New Project"**
4. Import your repository
5. Vercel will auto-detect Vite
6. Set environment variable: `VITE_API_URL`
7. Click **Deploy**

## Verification

After enabling Pages:
1. Go to **Settings** → **Pages**
2. You should see: **"Your site is live at https://username.github.io/repository-name/"**
3. The workflow should now run successfully

## Troubleshooting

### Still Getting "Not Found" Error?

1. **Check Repository Visibility:**
   - Private repos need GitHub Pro/Team/Enterprise
   - Public repos work with free accounts

2. **Check Branch Name:**
   - The workflow triggers on `main` or `master`
   - Make sure your default branch matches

3. **Check Permissions:**
   - Repository must allow GitHub Actions
   - Workflow needs `pages: write` permission (already set)

4. **Wait a Few Minutes:**
   - After enabling Pages, wait 2-3 minutes
   - Then trigger the workflow again

## Manual Trigger

If automatic deployment doesn't work:
1. Go to **Actions** tab
2. Select **"Deploy to GitHub Pages"** workflow
3. Click **"Run workflow"**
4. Select branch and click **"Run workflow"**

