import { WalletOutlined } from '@ant-design/icons'
import { Col, Input, InputNumber, Row } from 'antd'
import React, { useCallback } from 'react'
import type { FCC } from 'src/types'

import { DynamicFormNestItems } from '@/components/DynamicFormNestItems'
import { FormItem } from '@/components/FormItem'

import type { FormListRestField } from '../DynamicFormNestItems/DynamicFormNestItems'

interface OtherFieldFormListItemsProps {
  prop?: any
}

const OtherFieldFormListItems: FCC<OtherFieldFormListItemsProps> = () => {
  const inputsRender = useCallback(
    (name: number, restField: FormListRestField) => (
      <Row gutter={20}>
        <Col xs={24} md={12}>
          <FormItem {...restField} name={[name, 'name']}>
            <Input
              className='w100'
              addonBefore={<WalletOutlined />}
              size='large'
              placeholder='Вид расхода'
            />
          </FormItem>
        </Col>
        <Col xs={24} md={12}>
          <FormItem {...restField} name={[name, 'cost']}>
            <InputNumber
              className='w100'
              placeholder='Сумма в рублях'
              size='large'
              addonAfter={<span>тыс. ₽</span>}
            />
          </FormItem>
        </Col>
      </Row>
    ),
    []
  )

  return (
    <FormItem
      label='Прочие расходы'
      tooltip='Прочие расходы, которые вы хотели бы включить в расчет'
      wrapperCol={{ span: 12 }}
    >
      <DynamicFormNestItems
        formListName='others'
        formItemRender={inputsRender}
      />
    </FormItem>
  )
}

OtherFieldFormListItems.displayName = 'OtherFieldFormListItems'

export default OtherFieldFormListItems
