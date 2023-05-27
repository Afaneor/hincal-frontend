import type { BaseModelProps } from '@/models/Base'

export interface SectorModelProps extends BaseModelProps {
  name: string
  slug: string
  possible_income_from_patent: number
  avg_salary_of_staff: number
  tags: string[]
}
export class SectorModel {
  static modelName = 'sector'

  static url() {
    return '/hincal/sectors'
  }
}
