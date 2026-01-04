import express from 'express'
import { dbRun, dbGet, dbAll } from '../database.js'
import { authenticateToken } from '../middleware/auth.js'

const router = express.Router()

// Get all news items
router.get('/', async (req, res) => {
  try {
    const news = await dbAll('SELECT * FROM news ORDER BY date DESC, created_at DESC')
    res.json(news)
  } catch (error) {
    console.error('Get news error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Get single news item
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const news = await dbGet('SELECT * FROM news WHERE id = ?', [id])
    
    if (!news) {
      return res.status(404).json({ error: 'News item not found' })
    }
    
    res.json(news)
  } catch (error) {
    console.error('Get news error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Create news item
router.post('/', authenticateToken, async (req, res) => {
  try {
    const { type, title, content, date } = req.body

    if (!type || !title || !content || !date) {
      return res.status(400).json({ error: 'All fields are required' })
    }

    const result = await dbRun(
      'INSERT INTO news (type, title, content, date) VALUES (?, ?, ?, ?)',
      [type, title, content, date]
    )

    res.json({ 
      success: true, 
      id: result.lastID,
      message: 'News item created successfully' 
    })
  } catch (error) {
    console.error('Create news error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Update news item
router.put('/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params
    const { type, title, content, date } = req.body

    if (!type || !title || !content || !date) {
      return res.status(400).json({ error: 'All fields are required' })
    }

    await dbRun(
      'UPDATE news SET type = ?, title = ?, content = ?, date = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?',
      [type, title, content, date, id]
    )

    res.json({ success: true, message: 'News item updated successfully' })
  } catch (error) {
    console.error('Update news error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Delete news item
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params
    await dbRun('DELETE FROM news WHERE id = ?', [id])
    res.json({ success: true, message: 'News item deleted successfully' })
  } catch (error) {
    console.error('Delete news error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

export default router

