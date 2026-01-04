# Admin Panel Setup Guide

## Overview
This admin panel allows you to manage content, images, and news for the Pizzeria Adria website.

## Setup Instructions

### 1. Install Dependencies
All dependencies are already installed. If you need to reinstall:
```bash
npm install
```

### 2. Start the Development Server

**Option A: Run both frontend and backend together (Recommended)**
```bash
npm run dev:full
```

**Option B: Run separately**
```bash
# Terminal 1 - Frontend (Vite)
npm run dev

# Terminal 2 - Backend (Express)
npm run server
```

### 3. Access the Admin Panel

1. Open your browser and go to: `http://localhost:5173/admin`
2. Login with default credentials:
   - **Username:** `admin`
   - **Password:** `admin123`

⚠️ **Important:** Change the default password after first login!

### 4. Default Database

The database is automatically created in `data/database.sqlite` on first run. The default admin user is created automatically.

## Features

### Content Management
- **About Section:** Edit the story paragraphs and main image
- **News Management:** Add, edit, and delete news items, events, and announcements
- **Image Upload:** Upload images for different sections

### API Endpoints

#### Authentication
- `POST /api/auth/login` - Login
- `GET /api/auth/verify` - Verify token

#### Content
- `GET /api/content/:section` - Get section content
- `PUT /api/content/:section/:field` - Update content field

#### News
- `GET /api/news` - Get all news
- `GET /api/news/:id` - Get single news item
- `POST /api/news` - Create news (requires auth)
- `PUT /api/news/:id` - Update news (requires auth)
- `DELETE /api/news/:id` - Delete news (requires auth)

#### Upload
- `POST /api/upload/image` - Upload single image (requires auth)
- `POST /api/upload/images` - Upload multiple images (requires auth)

## Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
NODE_ENV=development
VITE_API_URL=http://localhost:3000
```

## File Structure

```
├── server/
│   ├── index.js           # Express server
│   ├── database.js        # Database setup
│   ├── middleware/
│   │   └── auth.js        # Authentication middleware
│   └── routes/
│       ├── auth.js        # Authentication routes
│       ├── content.js     # Content management routes
│       ├── news.js        # News management routes
│       └── upload.js      # Image upload routes
├── src/
│   ├── components/
│   │   ├── AdminLogin.vue # Login component
│   │   └── AdminPanel.vue # Main admin panel
│   └── views/
│       ├── HomeView.vue   # Main website
│       └── AdminView.vue  # Admin panel view
├── data/
│   └── database.sqlite    # SQLite database (auto-created)
└── uploads/              # Uploaded images (auto-created)
```

## Security Notes

1. **Change Default Password:** Immediately change the default admin password
2. **JWT Secret:** Change the JWT_SECRET in `.env` for production
3. **HTTPS:** Use HTTPS in production
4. **Database:** Consider using PostgreSQL or MySQL for production
5. **File Uploads:** Implement file size limits and validation

## Production Deployment

1. Build the frontend:
   ```bash
   npm run build
   ```

2. Set environment variables in production

3. Use a process manager like PM2:
   ```bash
   npm install -g pm2
   pm2 start server/index.js --name pizzeria-api
   ```

4. Serve the built frontend with a web server (nginx, Apache, etc.)

## Troubleshooting

### Database Issues
- Delete `data/database.sqlite` to reset the database
- Check file permissions for the `data/` directory

### Port Already in Use
- Change the PORT in `.env` file
- Update `VITE_API_URL` in `.env` to match

### Image Upload Issues
- Ensure `uploads/` directory exists and is writable
- Check file size limits (currently 5MB)

## Next Steps

1. Add more content sections (Menu, Reservations, etc.)
2. Implement image gallery management
3. Add user management (multiple admin users)
4. Add content versioning/history
5. Implement backup/restore functionality

