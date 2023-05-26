import { Dropdown } from 'antd'
import type { BaseSyntheticEvent } from 'react'
import React, { useCallback, useEffect, useState } from 'react'
import type { FCC } from 'src/types'

import { SelectDropdownSearchableCompleteFilter } from '@/components/SelectDropdownSearchableCompleteFilter/SelectDropdownSearchableCompleteFilter'
import { TagsInput } from '@/components/TagsInput'
import type { BaseModel } from '@/models'

interface SelectSearchableAsyncProps {
  placeholder?: string
  model: typeof BaseModel
  onChange?: (e: BaseSyntheticEvent) => void
}

const SelectSearchableAsync: FCC<SelectSearchableAsyncProps> = ({
  model,
  onChange,
  placeholder = 'Выбрать',
}) => {
  const [value, setValue] = useState<any[]>([])

  useEffect(() => {
    // @ts-ignore
    onChange({ target: { value } })
  }, [value])

  const DropdownRender = useCallback(() => {
    return (
      <SelectDropdownSearchableCompleteFilter
        filterName='name'
        listItemsNameKey='name'
        returnValueType='object'
        defList={value}
        model={model}
        onApply={(list: any[]) => setValue(list)}
      />
    )
  }, [])

  return (
    <Dropdown
      placement='bottom'
      dropdownRender={DropdownRender}
      trigger={['click']}
    >
      <TagsInput
        singleLine
        placeholder={placeholder}
        listItemsNameKey='name'
        list={value}
        onClick={(e) => e.stopPropagation()}
      />
    </Dropdown>
  )
}

SelectSearchableAsync.displayName = 'SelectSearchableAsync'

export default SelectSearchableAsync
