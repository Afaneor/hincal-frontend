import React from 'react'

import type { PropsFormItem } from '@/components'
import { FormItem } from '@/components'
import { CalcMap } from '@/components/CalcMap'
import type { FCC } from '@/types'

interface MapFormItemProps extends PropsFormItem {
  onCreatePolygone?: (selectedPolygonsInMeters: number) => void
}
const MapFormItem: FCC<MapFormItemProps> = ({ onCreatePolygone }) => {
  return (
    <FormItem name='territorial_locations' shouldUpdate>
      <CalcMap onCreatePolygon={onCreatePolygone} />
    </FormItem>
  )
}

MapFormItem.displayName = 'MapFormItem'

export default MapFormItem
