import request from 'superagent'

const serviceURL = '/api/v1/serviceroutes'

export async function getServices() {
  const response = await request.get(serviceURL)
  return response.body
}
