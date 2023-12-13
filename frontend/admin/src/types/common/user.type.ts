import type { Article } from './article.type'
import type { Comment } from './comment.type'

export type User = {
  id: number
  username: string
  email: string
  password: string
  bio: string | null
  image: any | null | string
  articles: Article[]
  favorites: Article[]
  followedBy: User[]
  following: User[]
  comments: Comment[]
  demo: boolean
}
