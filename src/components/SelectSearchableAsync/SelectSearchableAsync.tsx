import { Dropdown } from 'antd'
import type { BaseSyntheticEvent } from 'react'
import React, { createContext, useCallback, useMemo, useState } from 'react'
import type { FCC } from 'src/types'

// eslint-disable-next-line import/no-cycle
import { SelectDropdownSearchableCompleteFilter } from '@/components/SelectDropdownSearchableCompleteFilter'
import { TagsInput } from '@/components/TagsInput'
import type { BaseModel } from '@/models'

interface SelectContextProps {
  single?: boolean
}
export const SelectSearchableAsyncContext = createContext<SelectContextProps>(
  {} as SelectContextProps
)

interface SelectSearchableAsyncProps {
  single?: boolean
  placeholder?: string
  model: typeof BaseModel
  listItemsNameKey?: string
  hasError?: boolean

  onChange?: (e: BaseSyntheticEvent) => void
}

const SelectSearchableAsync: FCC<SelectSearchableAsyncProps> = ({
  single,
  model,
  onChange,
  placeholder = 'Выбрать',
  listItemsNameKey = 'name',
  hasError,
}) => {
  const [value, setValue] = useState<any[]>([])
  const contextProps = useMemo(() => ({ single }), [])

  // TODO: пока не убираю
  // useEffect(() => {
  //   console.log('xxx')
  //   const cValue = single ? value[0] : value
  //   if (value !== undefined) {
  //     // @ts-ignore
  //     onChange?.({ target: { value: cValue } })
  //   }
  // }, [value])

  const handleSetV = (list: any[]) => {
    const cValue = single ? list[0] : list
    // @ts-ignore
    onChange?.({ target: { value: cValue } })

    setValue(list)
  }
  const DropdownRender = useCallback(() => {
    return (
      <SelectSearchableAsyncContext.Provider value={contextProps}>
        <SelectDropdownSearchableCompleteFilter
          filterName='name'
          listItemsNameKey={listItemsNameKey}
          returnValueType='object'
          defList={value}
          model={model}
          onApply={handleSetV}
        />
      </SelectSearchableAsyncContext.Provider>
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
        hasError={hasError}
        placeholder={placeholder}
        listItemsNameKey={listItemsNameKey}
        list={value}
        onClick={(e) => e.stopPropagation()}
      />
    </Dropdown>
  )
}

SelectSearchableAsync.displayName = 'SelectSearchableAsync'

export default SelectSearchableAsync
