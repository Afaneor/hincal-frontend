import { TeamOutlined, UserOutlined } from '@ant-design/icons'
import { InputNumber } from 'antd'
import React from 'react'

import type { PropsFormItem } from '@/components'
import { FormItem } from '@/components'
import FormItemDash from '@/components/FormItemDash/FormItemDash'
import type { FormError } from '@/hooks/useFormErrors'
import type { FCC } from '@/types'

const staffFormItemStyle = {
  display: 'inline-block',
  width: 'calc(48% - 8px)',
}

interface StaffFormItemProps extends PropsFormItem {
  errorsFromStaff?: FormError
  errorsToStaff?: FormError
  min?: number
}
const StaffFormItem: FCC<StaffFormItemProps> = ({
  errors,
  errorsFromStaff,
  errorsToStaff,
  min,
}) => {
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
        errors={errorsFromStaff}
        rules={[
          ({ getFieldValue, setFieldValue }) => ({
            validator(_, value) {
              const toStaff = getFieldValue('to_staff')
              if (value > toStaff) {
                setFieldValue('to_staff', value)
              }
              return Promise.resolve()
            },
          }),
        ]}
      >
        <InputNumber
          addonBefore={<UserOutlined />}
          placeholder='1'
          size='large'
          min={0}
        />
      </FormItem>
      <FormItemDash />
      <FormItem
        name='to_staff'
        help='максимальная'
        style={staffFormItemStyle}
        errors={errorsToStaff}
        shouldUpdate
        rules={[
          ({ getFieldValue, setFieldValue }) => ({
            validator(_, value) {
              const fromStaff = getFieldValue('from_staff')
              if (value < fromStaff) {
                setFieldValue('to_staff', fromStaff)
              }
              return Promise.resolve()
            },
          }),
        ]}
      >
        <InputNumber<number>
          addonBefore={<TeamOutlined />}
          placeholder='999'
          size='large'
          min={min}
        />
      </FormItem>
    </FormItem>
  )
}

StaffFormItem.displayName = 'StaffFormItem'

export default StaffFormItem
