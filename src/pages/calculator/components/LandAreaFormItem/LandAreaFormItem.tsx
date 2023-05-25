import { GatewayOutlined } from '@ant-design/icons'
import { InputNumber } from 'antd'
import React from 'react'

import type { PropsFormItem } from '@/components'
import { FormItem } from '@/components'
import type { FCC } from '@/types'

import FormItemDash from '../../../../components/FormItemDash/FormItemDash'

const itemStyle = {
  display: 'inline-block',
  width: 'calc(45% - 12px)',
}
const LandAreaFormItem: FCC<PropsFormItem> = ({ errors }) => {
  return (
    <FormItem
      label='Площадь земельного участка (кв.м.)'
      tooltip='Площадь земельного участка для расположения промышленного производства (в квадратных метрах)'
      wrapperCol={{ span: 12 }}
      errors={errors}
    >
      <FormItem
        help='от'
        name='from_land_area'
        style={itemStyle}
        errors={errors}
      >
        <InputNumber
          placeholder='10'
          size='large'
          addonBefore={<GatewayOutlined />}
          addonAfter={
            <span>
              м<sup>2</sup>
            </span>
          }
        />
      </FormItem>
      <FormItemDash />
      <FormItem help='до' name='to_land_area' style={itemStyle} errors={errors}>
        <InputNumber
          placeholder='1000'
          size='large'
          addonBefore={<GatewayOutlined />}
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

LandAreaFormItem.displayName = 'LandAreaFormItem'

export default LandAreaFormItem
