import request from 'superagent'

const serviceURL = '/services'

export async function getServices() {
  const response = await request.get(serviceURL)
  return response.body
}
