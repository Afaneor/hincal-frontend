import type { BaseModelProps } from '@/models/Base'

export interface PostModelProps extends BaseModelProps {
  preview_image: string
  title: string
  text: string
  tags: string[]
  is_published: boolean
}
export class PostModel {
  static modelName = 'post'

  static url() {
    return '/blog/posts'
  }
}
