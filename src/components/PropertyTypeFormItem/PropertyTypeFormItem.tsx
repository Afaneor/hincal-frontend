import { GatewayOutlined } from '@ant-design/icons'
import { InputNumber, Select } from 'antd'
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
      <>
        <FormItem
          wrapperCol={{ xs: 8, md: 24 }}
          {...restField}
          name={[name, 'name']}
        >
          <Select
            size='large'
            placeholder='Тип здания/сооружения'
            options={propertyTypes}
          />
        </FormItem>
        <FormItem
          wrapperCol={{ xs: 24, md: 24 }}
          {...restField}
          name={[name, 'cost']}
        >
          <InputNumber
            placeholder='Площадь'
            size='large'
            addonBefore={<GatewayOutlined />}
            addonAfter={
              <span>
                м<sup>2</sup>
              </span>
            }
          />
        </FormItem>
      </>
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
