import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Form, Space } from 'antd'
import React from 'react'
import type { FCC } from 'src/types'

export interface FormListRestField {
  isListField: boolean
  fieldKey: number
}
interface DynamicFormNestItemsProps {
  formListName: string
  formItemRender: (
    name: number,
    restFields: FormListRestField
  ) => React.ReactNode
}

const DynamicFormNestItems: FCC<DynamicFormNestItemsProps> = ({
  formListName,
  formItemRender,
}) => {
  return (
    <Form.List name={formListName}>
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ key, name, ...restField }: any) => (
            <Space key={key} style={{ display: 'flex' }} align='center'>
              {formItemRender(name, restField)}
              <Form.Item>
                <MinusCircleOutlined onClick={() => remove(name)} />
              </Form.Item>
            </Space>
          ))}
          <Form.Item>
            <Button type='dashed' onClick={() => add()} icon={<PlusOutlined />}>
              Добавить
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
  )
}

DynamicFormNestItems.displayName = 'DynamicFormNestItems'

export default DynamicFormNestItems
