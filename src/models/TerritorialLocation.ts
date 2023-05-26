import type { BaseModelProps } from '@/models/Base'

export interface TerritorialLocationModelProps extends BaseModelProps {
  shot_name: string
  full_name: string
  slug: string
  avg_land_cadastral_value: number
  avg_land_lease_costs: number
  avg_land_purchase_costs: number
  avg_property_cadastral_value: number
  avg_property_lease_costs: number
  avg_property_purchase_costs: number
  tags: string[]
  extraData: any
}
export class TerritorialLocationModel {
  static modelName = 'territorialLocation'

  static url() {
    return '/hincal/territorial-location'
  }
}
