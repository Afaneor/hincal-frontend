import { isEmpty } from 'lodash'
import React from 'react'

import type { PropsFormItem } from '@/components'
import { FormItem } from '@/components'
import { SelectSearchableAsync } from '@/components/SelectSearchableAsync'
import { SectorModel } from '@/models'
import type { FCC } from '@/types'

const SectorFormItem: FCC<PropsFormItem> = ({ errors }) => {
  return (
    <FormItem
      label='Отрасль'
      tooltip='Отрасль ведения хозяйственной деятельности'
      name='sector'
      wrapperCol={{ span: 12 }}
      errors={errors}
      rules={[{ required: true, message: 'Пожалуйста, выберете сектор' }]}
    >
      <SelectSearchableAsync
        single
        placeholder='Выберите отрасль'
        hasError={!isEmpty(errors)}
        model={SectorModel}
      />
    </FormItem>
  )
}

SectorFormItem.displayName = 'SectorFormItem'

export default SectorFormItem
