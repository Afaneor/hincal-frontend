import { GatewayOutlined } from '@ant-design/icons'
import { Col, InputNumber, Row, Select } from 'antd'
import React, { useCallback } from 'react'
import type { FCC } from 'src/types'

import type { PropsFormItem } from '@/components'
import { FormItem } from '@/components'
import type { FormListRestField } from '@/components/DynamicFormNestItems/DynamicFormNestItems'
import DynamicFormNestItems from '@/components/DynamicFormNestItems/DynamicFormNestItems'

const propertyTypes = [
  {
    value: 'workshop_building',
    label: 'Здание цеха',
  },
  {
    value: 'warehouse_space',
    label: 'Складское помещение',
  },
  {
    value: 'administrative_building',
    label: 'Административное здание',
  },
  {
    value: 'other',
    label: 'Другие типы',
  },
]

const PropertyTypeFormItem: FCC<PropsFormItem> = () => {
  const inputsRender = useCallback(
    (name: number, restField: FormListRestField) => (
      <Row gutter={20}>
        <Col xs={24} md={12}>
          <FormItem {...restField} className='w100' name={[name, 'name']}>
            <Select
              size='large'
              allowClear
              className='w100'
              placeholder='Тип здания/сооружения'
              options={propertyTypes}
            />
          </FormItem>
        </Col>
        <Col xs={24} md={12}>
          <FormItem {...restField} name={[name, 'cost']}>
            <InputNumber
              placeholder='Площадь'
              size='large'
              className='w100'
              addonBefore={<GatewayOutlined />}
              addonAfter={
                <span>
                  м<sup>2</sup>
                </span>
              }
            />
          </FormItem>
        </Col>
      </Row>
    ),
    []
  )
  return (
    <FormItem
      wrapperCol={{ span: 12 }}
      label='Тип зданий/сооружений и их площади'
      tooltip='Типы строений или сооружений с их предполагаемыми площадями'
    >
      <DynamicFormNestItems
        formListName='properties'
        formItemRender={inputsRender}
      />
    </FormItem>
  )
}

PropertyTypeFormItem.displayName = 'PropertyTypeFormItem'

export default PropertyTypeFormItem
