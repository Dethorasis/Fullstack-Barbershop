export interface ContactModel {
  number: string
  email: string
  instagram: string
  address: string
}
export interface ContactModelId extends ContactModel {
  id: number
}
