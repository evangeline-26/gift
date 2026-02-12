# 🌐 Deployment Guide

## Deploy Your Valentine's Website Online

Want to share your romantic website with the world? Here are several free options:

---

## Option 1: Vercel (Recommended - Easiest!)

### Steps:

1. **Create a GitHub account** (if you don't have one)
   - Go to https://github.com
   - Sign up for free

2. **Install Git** (if not already installed)
   - Download from https://git-scm.com/

3. **Push your code to GitHub:**

   ```bash
   cd c:\Users\lumin\Downloads\Velentines
   git init
   git add .
   git commit -m "My Valentine's Website"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

4. **Deploy to Vercel:**
   - Go to https://vercel.com
   - Sign up with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Done! You'll get a URL like: `your-valentine.vercel.app`

---

## Option 2: Netlify

### Steps:

1. **Build your project:**

   ```bash
   npm run build
   ```

2. **Deploy to Netlify:**
   - Go to https://netlify.com
   - Sign up for free
   - Drag and drop the `dist` folder
   - Done! You'll get a URL like: `your-valentine.netlify.app`

### Or use Netlify CLI:

```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod
```

---

## Option 3: GitHub Pages

### Steps:

1. **Install gh-pages:**

   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json:**
   Add these lines:

   ```json
   {
     "homepage": "https://YOUR_USERNAME.github.io/valentine",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.js:**

   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: "/valentine/",
   });
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

---

## Option 4: Render

### Steps:

1. Push code to GitHub (see Vercel steps)
2. Go to https://render.com
3. Sign up for free
4. Click "New Static Site"
5. Connect your GitHub repository
6. Build command: `npm run build`
7. Publish directory: `dist`
8. Click "Create Static Site"

---

## 🔒 Making It Private

If you want only specific people to access it:

### Option 1: Password Protection

Use Vercel with password protection:

- Deploy to Vercel
- Add environment variable: `VERCEL_PASSWORD=your_secret_password`
- Add authentication middleware

### Option 2: Share Locally

Keep it running on your computer and share via:

- **ngrok**: Creates a temporary public URL
  ```bash
  npx ngrok http 5173
  ```
- Share the generated URL (valid for a few hours)

---

## 📝 Pre-Deployment Checklist

Before deploying, make sure:

- [ ] All photos are in `/public/photos/` folder
- [ ] Photos have correct filenames (lowercase, underscores)
- [ ] Test the website locally first
- [ ] All links work correctly
- [ ] Responsive design looks good on mobile

---

## 🎨 Custom Domain (Optional)

Want a custom URL like `ourvalentine.com`?

1. **Buy a domain** from:
   - Namecheap
   - GoDaddy
   - Google Domains

2. **Connect to your deployment:**
   - Vercel: Settings → Domains → Add
   - Netlify: Domain Settings → Add custom domain
   - Follow their DNS configuration instructions

---

## 🚀 Quick Deploy Commands

### For Vercel:

```bash
npm install -g vercel
vercel
```

### For Netlify:

```bash
npm install -g netlify-cli
netlify deploy --prod
```

---

## 💡 Tips

1. **Test First**: Always test locally before deploying
2. **Use HTTPS**: All free hosts provide HTTPS automatically
3. **Custom URL**: Use a memorable URL for easy sharing
4. **Mobile Test**: Check on mobile devices after deployment
5. **Share Link**: Send the URL to your Valentine! 💖

---

## 🆘 Troubleshooting

### Photos not showing?

- Make sure photos are in `/public/photos/`
- Check filenames match exactly (case-sensitive)
- Clear browser cache

### Build fails?

- Run `npm install` first
- Check for errors in terminal
- Make sure all files are saved

### Blank page after deployment?

- Check browser console for errors
- Verify base URL in `vite.config.js`
- Check routing configuration

---

## 📊 Recommended: Vercel

**Why Vercel?**

- ✅ Easiest to use
- ✅ Automatic deployments from GitHub
- ✅ Free SSL certificate
- ✅ Fast global CDN
- ✅ Perfect for React/Vite projects
- ✅ Free forever for personal projects

---

**Ready to share your love with the world! 💖**

Choose your deployment method and make your Valentine's website live in minutes!
