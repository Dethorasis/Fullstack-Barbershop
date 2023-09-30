import request from 'superagent'
import { ContactModel } from '../../models/Contact'

const contactURL = '/api/v1/contactroutes'

export async function getContact() {
  const response = await request.get(contactURL)
  return response.body
}

export async function updateServices(updatedContact: ContactModel) {
  try {
    const response = await request.put(contactURL).send(updatedContact)
    if (response.status === 200) {
      return response.body
    } else {
      throw new Error('Failed to update contact')
    }
  } catch (error) {
    console.error('Error updating contact:')
  }
}
