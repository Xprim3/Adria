import express from 'express'
import { dbRun, dbGet, dbAll } from '../database.js'
import { authenticateToken } from '../middleware/auth.js'

const router = express.Router()

// Get all content for a section
router.get('/:section', async (req, res) => {
  try {
    const { section } = req.params
    const content = await dbAll('SELECT * FROM content WHERE section = ?', [section])
    
    // Convert array to object for easier access
    const contentObj = {}
    content.forEach(item => {
      contentObj[item.field] = {
        value: item.value,
        image_url: item.image_url
      }
    })

    res.json(contentObj)
  } catch (error) {
    console.error('Get content error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Update content field
router.put('/:section/:field', authenticateToken, async (req, res) => {
  try {
    const { section, field } = req.params
    const { value, image_url } = req.body

    await dbRun(
      `INSERT INTO content (section, field, value, image_url, updated_at)
       VALUES (?, ?, ?, ?, CURRENT_TIMESTAMP)
       ON CONFLICT(section, field) 
       DO UPDATE SET value = ?, image_url = ?, updated_at = CURRENT_TIMESTAMP`,
      [section, field, value || null, image_url || null, value || null, image_url || null]
    )

    res.json({ success: true, message: 'Content updated successfully' })
  } catch (error) {
    console.error('Update content error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Get all sections
router.get('/', async (req, res) => {
  try {
    const sections = await dbAll('SELECT DISTINCT section FROM content')
    res.json(sections.map(s => s.section))
  } catch (error) {
    console.error('Get sections error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

export default router

