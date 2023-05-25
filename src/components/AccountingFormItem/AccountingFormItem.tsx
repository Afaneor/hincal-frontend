import React from 'react'

import type { PropsFormItem } from '@/components'
import { FormItem } from '@/components'
import { Switcher } from '@/components/Switcher'
import type { FCC } from '@/types'

const AccountingFormItem: FCC<PropsFormItem> = ({ errors }) => {
  return (
    <FormItem name='is_accounting' wrapperCol={{ span: 12 }} errors={errors}>
      <Switcher label='Предоставление бухгалтерских услуг' />
    </FormItem>
  )
}

AccountingFormItem.displayName = 'AccountingFormItem'

export default AccountingFormItem
