import connection from './connection'
import type { ServiceModel } from '../../models/Services'
import { GalleryModel } from '../../models/Gallery'
import { ContactModel } from '../../models/Contact'

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

export function getGallery(db = connection): Promise<GalleryModel[]> {
  return db('gallery').select()
}

export function getContact(db = connection): Promise<ContactModel[]> {
  return db('contact').select()
}
