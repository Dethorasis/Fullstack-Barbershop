import express from 'express'

import * as db from '../db/db'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const gallery = await db.getGallery()

    console.log('gallery route is being listed')
    res.json(gallery)
  } catch (error) {
    res.status(500)
  }
})

export default router
