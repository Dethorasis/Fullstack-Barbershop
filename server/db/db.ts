import connection from './connection'
import type { Services } from '../../models/Services'

export function getServices(db = connection): Promise<Services[]> {
  return db('services').select()
}
