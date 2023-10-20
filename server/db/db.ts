import connection from './connection'
import type { ServiceModel } from '../../models/Services'
import { GalleryModel, GalleryModelId } from '../../models/Gallery'
import { ContactModel, ContactModelId } from '../../models/Contact'

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
export function addGalleryImage(newImage: GalleryModel, db = connection) {

  return db('gallery').insert(newImage)
}
export function deleteGalleryImage(id: number, db = connection) {
  return db('gallery').where('id', id).del()
}

//CONTACT FUNCTIONS

export function getContact(db = connection): Promise<ContactModel[]> {
  return db('contact').select()
}
export function updateContact(newContact: ContactModelId, db = connection): Promise<number> {

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
