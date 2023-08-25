import connection from './connection'
import type { ServiceModel } from '../../models/Services'

export function getServices(db = connection): Promise<ServiceModel[]> {
  return db('services').select()
}
