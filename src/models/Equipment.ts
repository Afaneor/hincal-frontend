import type { BaseModelProps } from '@/models/Base'

export interface EquipmentModelProps extends BaseModelProps {
  name: string
  price: number
}
export class EquipmentModel {
  static modelName = 'equipment'

  static url() {
    return '/hincal/equipments'
  }
}
