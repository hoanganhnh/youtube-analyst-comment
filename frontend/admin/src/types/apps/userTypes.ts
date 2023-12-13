// ** Types
import { ThemeColor } from 'src/@core/layouts/types'
import { Article } from '../common/article.type'

export type UserLayoutType = {
  id: string | undefined
  articles: Article[]
}

export type UsersType = {
  id: number
  role: 'admin' | 'author'
  email: string
  status: 'inactive' | 'active'
  avatar: string
  username: string
  avatarColor?: ThemeColor
  bio?: string
  demo?: boolean | number
}
