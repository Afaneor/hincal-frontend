import { Select } from 'antd'
import React from 'react'
import type { ChoiceProps, FCC } from 'src/types'

import type { PropsFormItem } from '@/components'
import { FormItem } from '@/components'
import { useQueryCache } from '@/hooks/useQueryCache'
import { CalculatorModel } from '@/models'

const TypeBusinessFormItem: FCC<PropsFormItem> = ({ errors }) => {
  const choiceState: any = useQueryCache(`${CalculatorModel.modelName}Choices`)

  return (
    <FormItem
      label='ОПФ'
      tooltip='Организационно правовая форма'
      name='type_business'
      wrapperCol={{ span: 12 }}
      errors={errors}
      rules={[{ required: true, message: 'Пожалуйста, выберите ОПФ' }]}
    >
      <Select
        size='large'
        placeholder='Выберите организационно-правовую форму'
        allowClear
        options={choiceState?.type_business?.choices?.map(
          (ch: ChoiceProps) => ({
            value: ch.value,
            label: ch.display_name,
          })
        )}
      />
    </FormItem>
  )
}

TypeBusinessFormItem.displayName = 'TypeBusinessFormItem'

export default TypeBusinessFormItem
