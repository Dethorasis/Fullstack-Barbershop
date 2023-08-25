export interface ServiceModel {
  id: number
  name: string
  price: number
  description: string
}
export interface ServiceID extends ServiceModel {
  id: number
}
