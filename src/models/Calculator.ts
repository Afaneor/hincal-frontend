import type { HoveInfoProps } from '@/components/CalcMap/types'
import type { BaseModelProps } from '@/models/Base'
import type { EquipmentModelProps } from '@/models/Equipment'
import type { SectorModelProps } from '@/models/Sector'

export interface CalculatorModelProps extends BaseModelProps {
  type_business: string
  sectors: SectorModelProps[]
  sub_sectors: SectorModelProps[]
  from_staff: number
  to_staff: number
  territorial_locations: HoveInfoProps[]
  from_land_area: number
  to_land_area: number
  from_property_area: number
  to_property_area: number
  equipments: EquipmentModelProps[]
  type_tax_system: string
  need_accounting: boolean
  need_registration: boolean
  other: any
}
export class CalculatorModel {
  static modelName = 'calculator'

  static url() {
    return '/hincal/reports/calculator'
  }
}
