import React from 'react'

import type { PropsFormItem } from '@/components'
import { FormItem } from '@/components'
import { Switcher } from '@/components/Switcher'
import type { FCC } from '@/types'

const PatentFormItem: FCC<PropsFormItem> = ({ errors }) => {
  return (
    <FormItem name='is_patent' wrapperCol={{ span: 12 }} errors={errors}>
      <Switcher label='Оформление патента (только для индивидуальных предпринимателей)' />
    </FormItem>
  )
}

PatentFormItem.displayName = 'PatentFormItem'

export default PatentFormItem
