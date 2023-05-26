import React from 'react'

import type { PropsFormItem } from '@/components'
import { FormItem } from '@/components'
import { Switcher } from '@/components/Switcher'
import type { FCC } from '@/types'

interface PatentFormItemProps extends PropsFormItem {
  isDisabled?: boolean
}
const PatentFormItem: FCC<PatentFormItemProps> = ({ errors, isDisabled }) => {
  return (
    <FormItem name='is_patent' wrapperCol={{ span: 12 }} errors={errors}>
      <Switcher
        disabled={isDisabled}
        label='Оформление патента (только для индивидуальных предпринимателей)'
      />
    </FormItem>
  )
}

PatentFormItem.displayName = 'PatentFormItem'

export default PatentFormItem
