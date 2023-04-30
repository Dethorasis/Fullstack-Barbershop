import express from 'express'
import { join } from 'node:path'

import salonRoutes from './routes/salon'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, 'public')))

server.use('/api/v1/serviceroutes', salonRoutes)

export default server
