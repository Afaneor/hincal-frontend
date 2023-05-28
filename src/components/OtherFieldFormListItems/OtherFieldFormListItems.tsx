import { WalletOutlined } from '@ant-design/icons'
import { Input, InputNumber } from 'antd'
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
      <>
        <FormItem {...restField} name={[name, 'name']}>
          <Input
            addonBefore={<WalletOutlined />}
            size='large'
            placeholder='Вид расхода'
          />
        </FormItem>
        <FormItem {...restField} name={[name, 'cost']}>
          <InputNumber
            placeholder='Сумма в рублях'
            size='large'
            addonAfter={<span>₽</span>}
          />
        </FormItem>
      </>
    ),
    []
  )

  return (
    <FormItem
      label='Прочие расходы'
      tooltip='Прочие расходы, которые вы хотели бы включить в расчет'
      wrapperCol={{ span: 18 }}
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
