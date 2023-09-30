import connection from './connection'
import type { ServiceModel } from '../../models/Services'
import { GalleryModel } from '../../models/Gallery'
import { ContactModel } from '../../models/Contact'

//SERVICE FUNCTIONS

export function getServices(db = connection): Promise<ServiceModel[]> {
  return db('services').select()
}
export function addServices(
  service: ServiceModel,
  db = connection
): Promise<ServiceModel[]> {
  return db('services').insert({
    name: service.name,
    price: service.price,
    description: service.description,
  })
}
export function deleteServices(id: number, db = connection) {
  return db('services').where('id', id).del()
}
export function updateServices(
  service: ServiceModel,
  db = connection
): Promise<number> {
  return db('services')
    .update({
      name: service.name,
      price: service.price,
      description: service.description,
    })
    .where('id', service.id)
}

//GALLERY FUNCTIONS

export function getGallery(db = connection): Promise<GalleryModel[]> {
  return db('gallery').select()
}

//CONTACT FUNCTIONS

export function getContact(db = connection): Promise<ContactModel[]> {
  return db('contact').select()
}
export function updateContact(newContact: ContactModel, db = connection): Promise<number> {

  return db('contact').update({
    number: newContact.number,
    email: newContact.email,
    instagram: newContact.instagram,
    address: newContact.address
  })
  .where('id', newContact.id)
}

//AUTHENTICATION FUNCTIONS

// export function checkUserAuthentication(db = connection) {

//   return db('admin').select()
// }
