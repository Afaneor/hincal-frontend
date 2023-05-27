import { TeamOutlined, UserOutlined } from '@ant-design/icons'
import { InputNumber } from 'antd'
import React from 'react'

import type { PropsFormItem } from '@/components'
import { FormItem } from '@/components'
import FormItemDash from '@/components/FormItemDash/FormItemDash'
import type { FCC } from '@/types'

const staffFormItemStyle = {
  display: 'inline-block',
  width: 'calc(47% - 8px)',
}
const StaffFormItem: FCC<PropsFormItem> = ({ errors }) => {
  return (
    <FormItem
      label='Штатная численность работников'
      wrapperCol={{ span: 12 }}
      errors={errors}
    >
      <FormItem
        help='минимальная'
        name='from_staff'
        style={staffFormItemStyle}
        errors={errors}
      >
        <InputNumber
          addonBefore={<UserOutlined />}
          placeholder='1'
          size='large'
        />
      </FormItem>
      <FormItemDash />
      <FormItem
        name='to_staff'
        help='максимальная'
        style={staffFormItemStyle}
        errors={errors}
      >
        <InputNumber
          addonBefore={<TeamOutlined />}
          placeholder='999'
          size='large'
        />
      </FormItem>
    </FormItem>
  )
}

StaffFormItem.displayName = 'StaffFormItem'

export default StaffFormItem
