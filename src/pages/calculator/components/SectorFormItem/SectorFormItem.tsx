import { Select } from 'antd'
import React from 'react'

import type { PropsFormItem } from '@/components'
import { FormItem } from '@/components'
import type { FCC } from '@/types'

const { Option } = Select

const SectorFormItem: FCC<PropsFormItem> = ({ errors }) => {
  return (
    <FormItem
      label='Отрасль'
      tooltip='Отрасль ведения хозяйственной деятельности'
      name='sector'
      wrapperCol={{ span: 12 }}
      errors={errors}
    >
      <Select size='large' allowClear>
        <Option value='.com'>.com</Option>
        <Option value='.jp'>.jp</Option>
        <Option value='.cn'>.cn</Option>
        <Option value='.org'>.org</Option>
      </Select>
    </FormItem>
  )
}

SectorFormItem.displayName = 'SectorFormItem'

export default SectorFormItem
