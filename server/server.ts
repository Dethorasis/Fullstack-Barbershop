import express from 'express'
import { join } from 'node:path'
import salonRoutes from './routes/salon'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, 'public')))

// Add your API routes here
server.use('/api/v1/serviceroutes', salonRoutes)

// Serve the main HTML file for all routes
server.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'index.html'))
})

export default server
