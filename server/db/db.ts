import connection from './connection'
import type { ServiceModel } from '../../models/Services'
import { GalleryModel } from '../../models/Gallery'

export function getServices(db = connection): Promise<ServiceModel[]> {
  return db('services').select()
}

export function getGallery(db = connection): Promise<GalleryModel[]> {
  return db('gallery').select()
}
