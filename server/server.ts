import express from 'express'
import { join } from 'node:path'
import salon from './routes/salon'
import gallery from './routes/gallery'
import contact from './routes/contact'
import authenticate from './routes/authenticate'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, 'public')))

// Add your API routes here
server.use('/api/v1/serviceroutes', salon)
server.use('/api/v1/galleryroutes', gallery)
server.use('/api/v1/contactroutes', contact)

//Admin Routes
server.use('/api/v1/admin/serviceroutes', salon)
server.use('/api/v1/', authenticate)

// Serve the main HTML file for all routes
server.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'index.html'))
})

export default server
