import express from 'express'

import * as db from '../db/db'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const contact = await db.getContact()

    console.log('contact route is being listed')
    res.json(contact)
  } catch (error) {
    res.status(500)
  }
})

router.put('/', async (req, res) => {
  try {
    const updatedContact = await db.updateContact(req.body)

    console.log('updating contact route')
    res.json({ updatedContact })
  } catch (error) {
    res.status(500).json({ error: 'Database error' })
  }
})

export default router
