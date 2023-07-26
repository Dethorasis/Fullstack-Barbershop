import express from 'express'
import { join } from 'node:path'
import salonRoutes from './routes/salon'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, 'public')))

server.use('/services', salonRoutes)

// Catch-all route: Serve index.html for any unmatched route
server.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'index.html'))
})

export default server
