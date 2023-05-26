import React from 'react'

import type { PropsFormItem } from '@/components'
import { FormItem } from '@/components'
import { SelectSearchableAsync } from '@/components/SelectSearchableAsync/'
import { EquipmentModel } from '@/models'
import type { FCC } from '@/types'

const EquipmentFormItem: FCC<PropsFormItem> = ({ errors }) => {
  return (
    <FormItem
      label='Оборудование'
      tooltip='Предполагаемое к использованию оборудование'
      name='equipment'
      wrapperCol={{ span: 12 }}
      errors={errors}
    >
      <SelectSearchableAsync model={EquipmentModel} />
    </FormItem>
  )
}

EquipmentFormItem.displayName = 'EquipmentFormItem'

export default EquipmentFormItem
