import { TeamOutlined, UserOutlined } from '@ant-design/icons'
import { Col, InputNumber, Row } from 'antd'
import React, { useState } from 'react'

import type { PropsFormItem } from '@/components'
import { FormItem } from '@/components'
import type { FormError } from '@/hooks/useFormErrors'
import type { FCC } from '@/types'

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
      <Row gutter={20} justify='space-between'>
        <Col xs={24} md={11}>
          <FormItem
            help='минимальная'
            name='from_staff'
            errors={errorsFromStaff}
          >
            <InputNumber
              addonBefore={<UserOutlined />}
              placeholder='1'
              size='large'
              className='w100'
              min={0}
              onChange={setStartingNumber}
            />
          </FormItem>
        </Col>
        <Col md={1} xs={0}>
          -
        </Col>
        <Col xs={24} md={11}>
          <FormItem name='to_staff' help='максимальная' errors={errorsToStaff}>
            <InputNumber
              addonBefore={<TeamOutlined />}
              className='w100'
              placeholder='999'
              size='large'
              min={startingNumber}
            />
          </FormItem>
        </Col>
      </Row>
    </FormItem>
  )
}

StaffFormItem.displayName = 'StaffFormItem'

export default StaffFormItem
