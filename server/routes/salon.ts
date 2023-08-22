import express from 'express'

import * as db from '../db/db'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const services = await db.getServices()

    console.log('service route is being listed')
    res.json(services)
  } catch (error) {
    res.status(500)
  }
})

export default router
