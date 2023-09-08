import request from 'superagent'

const authenticateURL = '/api/v1/'

export async function getAuthentication() {
  const response = await request.get(authenticateURL)
  return response.body
}