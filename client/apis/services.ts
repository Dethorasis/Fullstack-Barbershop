import request from 'superagent'
import { Services } from '../../models/Services'

const serviceURL = '/api/v1/serviceroutes'

export async function getServices() {
  const response = await request.get(serviceURL)
  return response.body as Services[]
}
