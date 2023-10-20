import express from 'express'
import multer from 'multer'
import path from 'path'
import fs from 'fs'

import * as db from '../db/db'

const router = express.Router()

const uploadDirectory = '/images/'

// Multer config for file uploading
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(
      '/home/dethorasis1/projects/FullStack-Practice/server',
      'public',
      'images'
    )

    // Check if the directory exists, and create it if not
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true })
    }

    cb(null, uploadPath)
  },

  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
})

const upload = multer({ storage })

router.get('/', async (req, res) => {
  try {
    const gallery = await db.getGallery()

    console.log('gallery route is being listed')
    res.json(gallery)
  } catch (error) {
    res.status(500)
  }
})

router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { file } = req

    // Fixes TypeScript error
    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' })
    }

    await db.addGalleryImage({
      url: path.join(uploadDirectory, file.originalname),
      title: req.body.title,
      description: req.body.description,
    })

    console.log('gallery route is being posted to')
    res.status(201).json({ message: 'Image uploaded successfully' })
  } catch (error) {
    console.error('Error uploading image:', error)
    res.status(500).json({ error: 'Error uploading image' })
  }
})

export default router
