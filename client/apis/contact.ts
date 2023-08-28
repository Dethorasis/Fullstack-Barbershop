import request from 'superagent'

const contactURL = '/api/v1/contactroutes'

export async function getContact() {
  const response = await request.get(contactURL)
  return response.body
}
