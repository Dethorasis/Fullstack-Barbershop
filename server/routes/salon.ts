import express from 'express'

import * as db from '../db/db'
import { ServiceModel } from '../../models/Services'

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

router.post('/', async (req, res) => {
  try {
    const adminServices = await db.addServices(req.body)

    console.log('admin service route is being posted to')
    res.json({ adminServices })
  } catch (error) {
    res.status(500).json({ error: 'Database error' })
  }
})

export default router
