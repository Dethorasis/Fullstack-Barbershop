export interface Services {
  name: string
  price: number
  description: string
}
export interface ServiceID extends Services {
  id: number
}
