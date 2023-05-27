import { AppstoreOutlined } from '@ant-design/icons'
import { InputNumber } from 'antd'
import React from 'react'

import type { PropsFormItem } from '@/components'
import { FormItem } from '@/components'
import FormItemDash from '@/components/FormItemDash/FormItemDash'
import type { FCC } from '@/types'

const itemStyle = {
  display: 'inline-block',
  width: 'calc(47% - 8px)',
}

const PropertyAreaFormItem: FCC<PropsFormItem> = ({ errors }) => {
  return (
    <FormItem
      label='Площадь объектов (кв.м.)'
      tooltip='Площадь объектов капитального строительства (в квадратных метрах)'
      wrapperCol={{ span: 12 }}
      errors={errors}
    >
      <FormItem
        help='от'
        name='from_property_area'
        style={itemStyle}
        errors={errors}
      >
        <InputNumber
          placeholder='10'
          size='large'
          addonBefore={<AppstoreOutlined />}
          addonAfter={
            <span>
              м<sup>2</sup>
            </span>
          }
        />
      </FormItem>
      <FormItemDash />
      <FormItem
        help='до'
        name='to_property_area'
        style={itemStyle}
        errors={errors}
      >
        <InputNumber
          placeholder='1000'
          size='large'
          addonBefore={<AppstoreOutlined />}
          addonAfter={
            <span>
              м<sup>2</sup>
            </span>
          }
        />
      </FormItem>
    </FormItem>
  )
}

PropertyAreaFormItem.displayName = 'PropertyAreaFormItem'

export default PropertyAreaFormItem
