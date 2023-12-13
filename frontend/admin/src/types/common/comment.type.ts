import type { Article } from './article.type'

export type Comment = {
  id: number
  createdAt: Date
  updatedAt: Date
  body: string
  article?: Article
}
