import type { BaseModelProps } from '@/models/Base'

export interface SupportModelProps extends BaseModelProps {
  preview_image: string
  title: string
  text: string
  site: string
  amount: string
  extra_data: null
  is_actual: true
  tags: []
}
export class SupportModel {
  static modelName = 'support'

  static url() {
    return '/support/supports'
  }
}
