import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'
import authRoutes from './routes/auth.js'
import contentRoutes from './routes/content.js'
import newsRoutes from './routes/news.js'
import uploadRoutes from './routes/upload.js'

dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
const allowedOrigins = process.env.NODE_ENV === 'production'
  ? [
      process.env.FRONTEND_URL || 'https://pizzeriaadria.de',
      process.env.FRONTEND_URL_WWW || 'https://www.pizzeriaadria.de'
    ]
  : ['http://localhost:5173', 'http://localhost:3000']

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true)
    
    if (allowedOrigins.indexOf(origin) !== -1 || process.env.NODE_ENV === 'development') {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Serve uploaded files
app.use('/uploads', express.static(path.join(__dirname, '../uploads')))

// API Routes
app.use('/api/auth', authRoutes)
app.use('/api/content', contentRoutes)
app.use('/api/news', newsRoutes)
app.use('/api/upload', uploadRoutes)

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' })
})

// Serve static files from dist folder (in production)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../dist')))
  
  // Handle Vue Router (SPA) - serve index.html for all non-API routes
  app.get('*', (req, res, next) => {
    // Skip API routes
    if (req.path.startsWith('/api')) {
      return next()
    }
    res.sendFile(path.join(__dirname, '../dist/index.html'))
  })
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
  if (process.env.NODE_ENV === 'production') {
    console.log(`Frontend served from dist/ folder`)
  }
})

