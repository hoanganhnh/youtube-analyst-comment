import { Role } from './role.type'

export type User = {
  id: string
  name: string
  email: string
  imageURL?: string
  password: string
  role: Role
  username: string
}
