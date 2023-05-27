import type { BaseModelProps } from '@/models/Base'
import type { TerritorialLocationModelProps } from '@/models/TerritorialLocation'

export interface AreaModelProps extends BaseModelProps {
  preview_image: string
  title: string
  text: string
  territorial_location: TerritorialLocationModelProps
  address: string
  site: string
}
export class AreaModel {
  static modelName = 'area'

  static url() {
    return '/support/areas'
  }
}
