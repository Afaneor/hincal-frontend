import { Radio } from 'antd'
import React from 'react'
import type { ChoiceProps, FCC } from 'src/types'

import type { PropsFormItem } from '@/components'
import { FormItem } from '@/components'
import { useQueryCache } from '@/hooks/useQueryCache'
import { CalculatorModel } from '@/models'

const TypeTaxSystemFormItem: FCC<PropsFormItem> = ({ errors }) => {
  const choiceState: any = useQueryCache(`${CalculatorModel.modelName}Choices`)

  return (
    <FormItem
      label='Ситсема налогооблажения'
      name='type_tax_system'
      wrapperCol={{ span: 24 }}
      errors={errors}
    >
      <Radio.Group size='large'>
        {choiceState?.type_tax_system?.choices?.map((ch: ChoiceProps) => (
          <Radio.Button key={ch.value} value={ch.value}>
            {ch.display_name}
          </Radio.Button>
        ))}
      </Radio.Group>
    </FormItem>
  )
}

TypeTaxSystemFormItem.displayName = 'TypeTaxSystemFormItem'

export default TypeTaxSystemFormItem
