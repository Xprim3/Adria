# Deploy to Your Custom Domain - Complete Guide

This guide will help you deploy your Pizzeria Adria website to your custom domain.

## Overview

Your project consists of:
- **Frontend**: Vue 3 application (builds to `dist/` folder)
- **Backend**: Express.js API server with SQLite database

## Deployment Options

### Option 1: Vercel (Recommended - Easiest) ⭐

Vercel can host both your frontend and backend API routes.

#### Steps:

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy to Vercel**:
   ```bash
   vercel
   ```
   Follow the prompts. For production, run:
   ```bash
   vercel --prod
   ```

4. **Configure Custom Domain**:
   - Go to your Vercel dashboard
   - Select your project
   - Go to Settings → Domains
   - Add your custom domain (e.g., `pizzeriaadria.de`)
   - Follow DNS configuration instructions

5. **Update Environment Variables**:
   - In Vercel dashboard → Settings → Environment Variables
   - Add:
     ```
     JWT_SECRET=your-super-secret-jwt-key
     NODE_ENV=production
     PORT=3000
     ```

6. **Update CORS in server/index.js**:
   - Add your domain to the CORS origins

#### Note: Vercel Limitations
- Vercel uses serverless functions, so you may need to adapt your Express server
- SQLite might need to be replaced with a cloud database (like Supabase, PlanetScale, or Railway)

---

### Option 2: Traditional Web Hosting (cPanel, Shared Hosting)

If you have traditional hosting (cPanel, shared hosting, etc.):

#### Steps:

1. **Build Your Frontend**:
   ```bash
   npm run build
   ```
   This creates a `dist/` folder with all static files.

2. **Upload Files**:
   - Upload the entire `dist/` folder contents to your `public_html` or `www` folder
   - Upload the `server/` folder to your hosting
   - Upload `package.json`, `node_modules` (or run `npm install` on server)

3. **Configure Backend**:
   - Set up Node.js on your hosting (if available)
   - Create a `.env` file with your environment variables
   - Start your server (may need PM2 or similar process manager)

4. **Update API URL**:
   - Update `VITE_API_URL` in your build or create `.env.production`:
     ```
     VITE_API_URL=https://yourdomain.com/api
     ```

5. **Configure Domain**:
   - Point your domain's DNS to your hosting provider
   - Set up SSL certificate (Let's Encrypt is free)

---

### Option 3: VPS (Virtual Private Server) - Most Control

If you have a VPS (DigitalOcean, AWS EC2, Linode, etc.):

#### Steps:

1. **Connect to Your VPS**:
   ```bash
   ssh user@your-server-ip
   ```

2. **Install Node.js**:
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

3. **Clone Your Repository**:
   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo
   ```

4. **Install Dependencies**:
   ```bash
   npm install --legacy-peer-deps
   ```

5. **Build Frontend**:
   ```bash
   npm run build
   ```

6. **Set Up Environment Variables**:
   ```bash
   nano .env
   ```
   Add:
   ```
   PORT=3000
   JWT_SECRET=your-super-secret-jwt-key
   NODE_ENV=production
   ```

7. **Update Server to Serve Frontend**:
   The server needs to serve the built frontend files. See updated `server/index.js` below.

8. **Install PM2 (Process Manager)**:
   ```bash
   npm install -g pm2
   ```

9. **Start Your Server**:
   ```bash
   pm2 start server/index.js --name pizzeria-adria
   pm2 save
   pm2 startup
   ```

10. **Set Up Nginx (Reverse Proxy)**:
    ```bash
    sudo apt install nginx
    ```
    
    Create config file:
    ```bash
    sudo nano /etc/nginx/sites-available/pizzeriaadria
    ```
    
    Add:
    ```nginx
    server {
        listen 80;
        server_name pizzeriaadria.de www.pizzeriaadria.de;

        location / {
            proxy_pass http://localhost:3000;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }
    }
    ```
    
    Enable site:
    ```bash
    sudo ln -s /etc/nginx/sites-available/pizzeriaadria /etc/nginx/sites-enabled/
    sudo nginx -t
    sudo systemctl restart nginx
    ```

11. **Set Up SSL with Let's Encrypt**:
    ```bash
    sudo apt install certbot python3-certbot-nginx
    sudo certbot --nginx -d pizzeriaadria.de -d www.pizzeriaadria.de
    ```

12. **Configure DNS**:
    - Point your domain's A record to your VPS IP address
    - Wait for DNS propagation (can take up to 48 hours)

---

### Option 4: Separate Frontend + Backend Deployment

Deploy frontend and backend separately:

#### Frontend (Static Hosting):
- **Netlify**: Connect GitHub repo, build command: `npm run build`, publish directory: `dist`
- **Vercel**: Same as above
- **Cloudflare Pages**: Free static hosting

#### Backend (API Hosting):
- **Railway**: Easy Node.js deployment
- **Render**: Free tier available
- **DigitalOcean App Platform**: Simple deployment
- **Heroku**: Traditional option (paid now)

#### Steps:

1. **Deploy Backend First**:
   - Push backend code to a separate repo or use the same repo
   - Deploy to Railway/Render/etc.
   - Get your backend URL (e.g., `https://api.pizzeriaadria.de`)

2. **Update Frontend Environment**:
   - Create `.env.production`:
     ```
     VITE_API_URL=https://api.pizzeriaadria.de/api
     ```

3. **Build and Deploy Frontend**:
   ```bash
   npm run build
   ```
   - Deploy `dist/` folder to Netlify/Vercel/Cloudflare Pages
   - Configure custom domain

4. **Update CORS**:
   - In your backend, update CORS to allow your frontend domain

---

## Important: Update Server to Serve Frontend

If deploying as a single application, update `server/index.js` to serve the built frontend:

```javascript
// Add this before API routes
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Serve static files from dist folder (in production)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../dist')))
  
  // Handle Vue Router (SPA) - serve index.html for all routes
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'))
  })
}
```

---

## Environment Variables Checklist

Make sure to set these in your production environment:

```env
# Server
PORT=3000
JWT_SECRET=your-very-secure-secret-key-change-this
NODE_ENV=production

# Frontend (if separate)
VITE_API_URL=https://your-backend-url.com/api
```

---

## DNS Configuration

For your custom domain, you'll need to configure DNS:

### If using Vercel/Netlify:
- Add CNAME record pointing to their provided URL
- Or A record pointing to their IP (if provided)

### If using VPS:
- Add A record pointing to your VPS IP address
- Add CNAME for www subdomain

### Example DNS Records:
```
Type    Name    Value
A       @       your-server-ip
CNAME   www     yourdomain.com
```

---

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Test admin panel login
- [ ] Test image uploads
- [ ] Test API endpoints
- [ ] Verify SSL certificate is active (HTTPS)
- [ ] Test on mobile devices
- [ ] Check Google Analytics (if using)
- [ ] Verify SEO meta tags
- [ ] Test contact forms/links
- [ ] Backup database

---

## Troubleshooting

### Frontend not loading:
- Check if `dist/` folder is uploaded correctly
- Verify base path in `vite.config.ts`
- Check browser console for errors

### API not working:
- Verify CORS settings allow your domain
- Check environment variables are set
- Verify backend server is running
- Check firewall/security settings

### Database issues:
- Ensure SQLite database file has correct permissions
- Check database path is correct
- Verify database file is uploaded to server

---

## Need Help?

If you encounter issues:
1. Check server logs
2. Check browser console
3. Verify environment variables
4. Test API endpoints directly
5. Check DNS propagation status

