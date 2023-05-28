import type { BaseModelProps } from '@/models/Base'

export interface OfferModelProps extends BaseModelProps {
  title: string
  text: string
  site: string
  extra_data: any
  tags: string[]
  interest_rate: ''
  loan_term: ''
  amount: ''
}
export class OfferModel {
  static modelName = 'offer'

  static url() {
    return '/support/offers'
  }
}
