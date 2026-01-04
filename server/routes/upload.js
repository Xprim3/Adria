import express from 'express'
import multer from 'multer'
import path from 'path'
import { fileURLToPath } from 'url'
import { authenticateToken } from '../middleware/auth.js'
import { dbRun } from '../database.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, '../../uploads')
    cb(null, uploadPath)
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
  }
})

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|webp/
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase())
    const mimetype = allowedTypes.test(file.mimetype)

    if (mimetype && extname) {
      return cb(null, true)
    } else {
      cb(new Error('Only image files are allowed'))
    }
  }
})

// Upload single image
router.post('/image', authenticateToken, upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' })
    }

    const { section, alt_text } = req.body
    const fileUrl = `/uploads/${req.file.filename}`

    // Save to database
    await dbRun(
      'INSERT INTO images (section, filename, url, alt_text) VALUES (?, ?, ?, ?)',
      [section || 'general', req.file.filename, fileUrl, alt_text || '']
    )

    res.json({
      success: true,
      url: fileUrl,
      filename: req.file.filename,
      message: 'Image uploaded successfully'
    })
  } catch (error) {
    console.error('Upload error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Upload multiple images
router.post('/images', authenticateToken, upload.array('images', 10), async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: 'No files uploaded' })
    }

    const { section } = req.body
    const uploadedFiles = []

    for (const file of req.files) {
      const fileUrl = `/uploads/${file.filename}`
      await dbRun(
        'INSERT INTO images (section, filename, url) VALUES (?, ?, ?)',
        [section || 'general', file.filename, fileUrl]
      )
      uploadedFiles.push({
        url: fileUrl,
        filename: file.filename
      })
    }

    res.json({
      success: true,
      files: uploadedFiles,
      message: `${uploadedFiles.length} image(s) uploaded successfully`
    })
  } catch (error) {
    console.error('Upload error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

export default router

