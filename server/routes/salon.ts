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

router.post('/', async (req, res) => {
  try {
    const adminServices = await db.addServices(req.body)

    console.log('admin service route is being posted to')
    res.json({ adminServices })
  } catch (error) {
    res.status(500).json({ error: 'Database error' })
  }
})

router.delete('/:id', async (req, res) => {
  const serviceId = req.params.id

  const deletedService = await db.deleteServices(+serviceId)
  console.log('deleting on admin service route')
  res.json(deletedService)  
})

router.put('/', async (req, res) => {
  try {
    const updatedService = await db.updateServices(req.body)

    console.log('updating admin service route')
    res.json({ updatedService })
  } catch (error) {
    res.status(500).json({ error: 'Database error' })
  }
})

export default router
