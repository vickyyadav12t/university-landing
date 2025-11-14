# Deploy to Vercel - Step by Step Guide

This guide will help you deploy your University Landing Pages to Vercel with SSL and custom domain support.

## Prerequisites

- A GitHub account (recommended) or GitLab/Bitbucket
- Node.js installed on your computer
- Git installed on your computer

---

## Method 1: Deploy via Vercel Dashboard (Easiest - Recommended)

### Step 1: Prepare Your Code

1. **Test your build locally:**
   ```bash
   cd uni-landing-pages
   npm install
   npm run build
   ```
   This should create a `build` folder without errors.

2. **Initialize Git (if not already done):**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Ready for deployment"
   ```

### Step 2: Push to GitHub

1. **Create a new repository on GitHub:**
   - Go to https://github.com/new
   - Name it: `university-landing-pages` (or any name you prefer)
   - Don't initialize with README (you already have one)
   - Click "Create repository"

2. **Push your code to GitHub:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/university-landing-pages.git
   git branch -M main
   git push -u origin main
   ```
   Replace `YOUR_USERNAME` with your GitHub username.

### Step 3: Deploy on Vercel

1. **Go to Vercel:**
   - Visit https://vercel.com
   - Click "Sign Up" or "Log In"
   - Sign in with your GitHub account (recommended)

2. **Import your project:**
   - Click "Add New..." → "Project"
   - Find your `university-landing-pages` repository
   - Click "Import"

3. **Configure project settings:**
   - **Framework Preset:** Create React App (auto-detected)
   - **Root Directory:** `uni-landing-pages` (if your repo has the folder, otherwise leave blank)
   - **Build Command:** `npm run build` (auto-filled)
   - **Output Directory:** `build` (auto-filled)
   - **Install Command:** `npm install` (auto-filled)

4. **Environment Variables (Optional):**
   - If you're using Pipedream, add:
     - Name: `REACT_APP_PIPEDREAM_URL`
     - Value: Your Pipedream endpoint URL
   - Click "Add" for each variable

5. **Deploy:**
   - Click "Deploy"
   - Wait 2-3 minutes for the build to complete
   - Your site will be live at: `https://your-project-name.vercel.app`

### Step 4: Verify Deployment

1. **Check your deployment:**
   - Vercel will provide a URL like: `https://university-landing-pages.vercel.app`
   - Click the URL to view your live site
   - Test both pages:
     - `/` - LPU Private University
     - `/university2` - XYZ Global University

2. **Test all features:**
   - ✅ Navigation works
   - ✅ Forms submit correctly
   - ✅ Modal opens
   - ✅ Download brochure works
   - ✅ Responsive on mobile

---

## Method 2: Deploy via Vercel CLI (Advanced)

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```
This will open a browser for authentication.

### Step 3: Navigate to Project

```bash
cd uni-landing-pages
```

### Step 4: Deploy

```bash
vercel
```

**Follow the prompts:**
- Set up and deploy? **Yes**
- Which scope? Select your account
- Link to existing project? **No** (first time)
- Project name? `university-landing-pages` (or press Enter for default)
- Directory? `./` (press Enter)
- Override settings? **No**

### Step 5: Production Deployment

After the preview deployment works, deploy to production:

```bash
vercel --prod
```

---

## Method 3: Deploy from Local Folder (Quick Test)

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login

```bash
vercel login
```

### Step 3: Deploy

```bash
cd uni-landing-pages
vercel
```

This will deploy directly from your local folder without needing Git.

---

## Post-Deployment Configuration

### 1. Custom Domain (Optional)

1. Go to your project on Vercel dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., `university.com`)
4. Follow DNS configuration instructions
5. SSL certificate is automatically provided by Vercel

### 2. Environment Variables

If you need to add/update environment variables:

1. Go to Project → Settings → Environment Variables
2. Add your variables:
   - `REACT_APP_PIPEDREAM_URL` (if using Pipedream)
3. Redeploy for changes to take effect

### 3. Automatic Deployments

- **Automatic:** Every push to `main` branch triggers a new deployment
- **Preview:** Pull requests get preview deployments
- **Production:** Only `main` branch deploys to production

---

## Troubleshooting

### Issue: 404 on routes like `/university2`

**Solution:** The `vercel.json` file is already configured with rewrites. Make sure it's in your repository root.

### Issue: Build fails

**Solution:**
1. Test build locally: `npm run build`
2. Check for errors in the build output
3. Ensure all dependencies are in `package.json`

### Issue: Environment variables not working

**Solution:**
1. Add variables in Vercel dashboard
2. Redeploy after adding variables
3. Variables must start with `REACT_APP_` for Create React App

### Issue: Assets not loading

**Solution:**
- Check that `package.json` has correct build script
- Verify `build` folder is created correctly
- Check browser console for 404 errors

---

## Quick Commands Reference

```bash
# Test build locally
npm run build

# Deploy to Vercel (first time)
vercel

# Deploy to production
vercel --prod

# View deployments
vercel ls

# View logs
vercel logs
```

---

## Your Live URLs

After deployment, you'll get:

- **Production URL:** `https://your-project.vercel.app`
- **Preview URLs:** For each branch/PR

Both URLs have:
- ✅ Free SSL certificate
- ✅ Global CDN
- ✅ Automatic deployments
- ✅ Analytics (optional)

---

## Next Steps

1. ✅ Share your live URL
2. ✅ Test on mobile devices
3. ✅ Set up custom domain (optional)
4. ✅ Configure Pipedream endpoint (if needed)
5. ✅ Monitor deployments in Vercel dashboard

---

## Support

- Vercel Docs: https://vercel.com/docs
- Vercel Support: https://vercel.com/support

**Congratulations! Your university landing pages are now live! 🎉**

