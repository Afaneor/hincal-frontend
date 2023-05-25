import { ToolOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import React from 'react'

import type { PropsFormItem } from '@/components'
import { FormItem } from '@/components'
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
      <Input
        placeholder='name@example.ru'
        size='large'
        addonBefore={<ToolOutlined />}
      />
    </FormItem>
  )
}

EquipmentFormItem.displayName = 'EquipmentFormItem'

export default EquipmentFormItem
