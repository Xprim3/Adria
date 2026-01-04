import sqlite3 from 'sqlite3'
import { promisify } from 'util'
import path from 'path'
import { fileURLToPath } from 'url'
import bcrypt from 'bcryptjs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const dbPath = path.join(__dirname, '../data/database.sqlite')

// Ensure data directory exists
import fs from 'fs'
const dataDir = path.join(__dirname, '../data')
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true })
}

// Create database connection
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err)
    console.error('Database path:', dbPath)
  } else {
    console.log('Connected to SQLite database')
    console.log('Database path:', dbPath)
    initializeDatabase()
  }
})

// Promisify database methods
const dbRun = (sql, params = []) => {
  return new Promise((resolve, reject) => {
    db.run(sql, params, function(err) {
      if (err) reject(err)
      else resolve({ lastID: this.lastID, changes: this.changes })
    })
  })
}
const dbGet = promisify(db.get.bind(db))
const dbAll = promisify(db.all.bind(db))

// Initialize database tables
async function initializeDatabase() {
  try {
    // Users table
    await dbRun(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `)

    // Content table (for section content)
    await dbRun(`
      CREATE TABLE IF NOT EXISTS content (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        section TEXT NOT NULL,
        field TEXT NOT NULL,
        value TEXT,
        image_url TEXT,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(section, field)
      )
    `)

    // News table
    await dbRun(`
      CREATE TABLE IF NOT EXISTS news (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        type TEXT NOT NULL,
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        date TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `)

    // Images table
    await dbRun(`
      CREATE TABLE IF NOT EXISTS images (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        section TEXT NOT NULL,
        filename TEXT NOT NULL,
        url TEXT NOT NULL,
        alt_text TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `)

    // Create default admin user if it doesn't exist
    try {
      const adminExists = await dbGet('SELECT id FROM users WHERE username = ?', ['admin'])
      if (!adminExists) {
        const hashedPassword = await bcrypt.hash('admin123', 10)
        await dbRun('INSERT INTO users (username, password) VALUES (?, ?)', ['admin', hashedPassword])
        console.log('Default admin user created: username: admin, password: admin123')
      }
    } catch (error) {
      console.error('Error creating admin user:', error)
    }

    console.log('Database initialized successfully')
  } catch (error) {
    console.error('Error initializing database:', error)
  }
}

export { db, dbRun, dbGet, dbAll }

