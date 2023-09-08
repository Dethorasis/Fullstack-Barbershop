import express from 'express'

import * as db from '../db/db'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const admin = await db.checkUserAuthentication()

    console.log('attempted to check database for authentication')
    res.json(admin)
  } catch (error) {
    res.status(500)
  }
})

export default router
