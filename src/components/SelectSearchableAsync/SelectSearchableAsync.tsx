import { Dropdown } from 'antd'
import React from 'react'
import type { FCC } from 'src/types'

import { SelectDropdownSearchableCompleteFilter } from '@/components/SelectDropdownSearchableCompleteFilter/SelectDropdownSearchableCompleteFilter'
import { TagsInput } from '@/components/TagsInput'
import type { BaseModel } from '@/models'

interface SelectSearchableAsyncProps {
  model: typeof BaseModel
}

const DropdownRender = (model: typeof BaseModel) => {
  return (
    <SelectDropdownSearchableCompleteFilter
      filterName='name'
      listItemsNameKey='name'
      returnValueType='object'
      defList={[]}
      model={model}
      onApply={() => ({})}
    />
  )
}
const SelectSearchableAsync: FCC<SelectSearchableAsyncProps> = ({ model }) => {
  return (
    <Dropdown
      placement='bottom'
      dropdownRender={() => DropdownRender(model)}
      trigger={['click']}
    >
      <TagsInput
        singleLine
        placeholder='Выбрать'
        onClick={(e) => e.stopPropagation()}
        listItemsNameKey='name'
        list={[]}
      />
    </Dropdown>
  )
}

SelectSearchableAsync.displayName = 'SelectSearchableAsync'

export default SelectSearchableAsync
