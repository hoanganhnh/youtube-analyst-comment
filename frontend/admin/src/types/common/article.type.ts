import type { Comment } from './comment.type'

export type Article = {
  id: number
  title: string
  slug: string
  description: string
  body: string
  comments?: Comment[]
  favorited?: boolean
  authorId?: number
  likes?: number[]
}
