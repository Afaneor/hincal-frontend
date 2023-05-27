import type { BaseModelProps } from '@/models/Base'

export interface ReportModelProps extends BaseModelProps {
  type_business: string
  sectors: any[]
  sub_sectors: any[]
  from_staff: number
  to_staff: number
  territorial_locations: any[]
  from_land_area: number
  to_land_area: number
  from_property_area: number
  to_property_area: number
  equipment: any[]
  type_tax_system: any
  need_accounting: boolean
  need_registration: boolean
  other: any
}
export class ReportModel {
  static modelName = 'report'

  static url() {
    return '/hincal/reports'
  }
}
