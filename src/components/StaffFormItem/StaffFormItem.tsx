import { TeamOutlined, UserOutlined } from '@ant-design/icons'
import { InputNumber } from 'antd'
import React, { useState } from 'react'

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
}
const StaffFormItem: FCC<StaffFormItemProps> = ({
  errors,
  errorsFromStaff,
  errorsToStaff,
}) => {
  const [startingNumber, setStartingNumber] = useState<any>(0)
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
      >
        <InputNumber
          addonBefore={<UserOutlined />}
          placeholder='1'
          size='large'
          min={0}
          onChange={setStartingNumber}
        />
      </FormItem>
      <FormItemDash />
      <FormItem
        name='to_staff'
        help='максимальная'
        style={staffFormItemStyle}
        errors={errorsToStaff}
      >
        <InputNumber
          addonBefore={<TeamOutlined />}
          placeholder='999'
          size='large'
          min={startingNumber}
        />
      </FormItem>
    </FormItem>
  )
}

StaffFormItem.displayName = 'StaffFormItem'

export default StaffFormItem
