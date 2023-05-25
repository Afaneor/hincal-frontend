import React from 'react'

import type { PropsFormItem } from '@/components'
import { FormItem } from '@/components'
import { CalcMap } from '@/components/CalcMap'
import type { FCC } from '@/types'

const MapFormItem: FCC<PropsFormItem> = () => {
  return (
    <FormItem name='location_area' shouldUpdate>
      <CalcMap />
    </FormItem>
  )
}

MapFormItem.displayName = 'MapFormItem'

export default MapFormItem
