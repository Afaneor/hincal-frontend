import {
  MinusCircleOutlined,
  PlusOutlined,
  WalletOutlined,
} from '@ant-design/icons'
import { Button, Form, Input, InputNumber, Space } from 'antd'
import React from 'react'
import type { FCC } from 'src/types'

import { FormItem } from '@/components/FormItem'

interface OtherFieldFormListItemsProps {
  prop?: any
}

const OtherFieldFormListItems: FCC<OtherFieldFormListItemsProps> = () => {
  return (
    <FormItem
      label='Прочие расходы'
      tooltip='Прочие расходы, которые вы хотели бы включить в рассчет'
      wrapperCol={{ span: 18 }}
    >
      <Form.List name='other'>
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space key={key} style={{ display: 'flex' }} align='center'>
                <Form.Item {...restField} name={[name, 'typeExpenses']}>
                  <Input
                    addonBefore={<WalletOutlined />}
                    size='large'
                    placeholder='Вид расхода'
                  />
                </Form.Item>
                <Form.Item {...restField} name={[name, 'amount']}>
                  <InputNumber
                    placeholder='Сумма в рублях'
                    size='large'
                    addonAfter={<span>₽</span>}
                  />
                </Form.Item>
                <Form.Item>
                  <MinusCircleOutlined onClick={() => remove(name)} />
                </Form.Item>
              </Space>
            ))}
            <Form.Item>
              <Button
                type='dashed'
                onClick={() => add()}
                icon={<PlusOutlined />}
              >
                Добавить
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </FormItem>
  )
}

OtherFieldFormListItems.displayName = 'OtherFieldFormListItems'

export default OtherFieldFormListItems
