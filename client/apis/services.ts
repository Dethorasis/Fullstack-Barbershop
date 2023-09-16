import request from 'superagent'

const serviceURL = '/api/v1/serviceroutes'

export async function getServices() {
  const response = await request.get(serviceURL)
  return response.body
}

export async function addServices(service: any) {
  try {
    const response = await request.post(serviceURL).send(service)
    if (response.status === 200) {
      return response.body
    } else {
      throw new Error('Failed to add service')
    }
  } catch (error) {
    console.error('Error adding service:')
  }
}

export async function deleteServices(serviceId: number) {
  try {
    const response = await request.delete(`${serviceURL}/${serviceId}`)
    if (response.status === 200) {
      return response.body
    } else {
      throw new Error('Failed to delete service')
    }
  } catch (error) {
    console.error('Error adding service:')
  }
}
