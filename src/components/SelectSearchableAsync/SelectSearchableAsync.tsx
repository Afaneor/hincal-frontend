import { Dropdown } from 'antd'
import type { BaseSyntheticEvent } from 'react'
import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import type { FCC } from 'src/types'

// eslint-disable-next-line import/no-cycle
import { SelectDropdownSearchableCompleteFilter } from '@/components/SelectDropdownSearchableCompleteFilter'
import { TagsInput } from '@/components/TagsInput'
import type { BaseModel } from '@/models'

interface SelectSearchableAsyncProps {
  single?: boolean
  placeholder?: string
  model: typeof BaseModel
  listItemsNameKey?: string

  onChange?: (e: BaseSyntheticEvent) => void
}

interface SelectContextProps {
  single?: boolean
}
export const SelectSearchableAsyncContext = createContext<SelectContextProps>(
  {} as SelectContextProps
)
const SelectSearchableAsync: FCC<SelectSearchableAsyncProps> = ({
  single,
  model,
  onChange,
  placeholder = 'Выбрать',
  listItemsNameKey = 'name',
}) => {
  const [value, setValue] = useState<any[]>([])
  const contextProps = useMemo(() => ({ single }), [])

  useEffect(() => {
    const cValue = single ? value[0] : value
    // @ts-ignore
    onChange?.({ target: { value: cValue } })
  }, [value])

  const DropdownRender = useCallback(() => {
    return (
      <SelectSearchableAsyncContext.Provider value={contextProps}>
        <SelectDropdownSearchableCompleteFilter
          filterName='name'
          listItemsNameKey={listItemsNameKey}
          returnValueType='object'
          defList={value}
          model={model}
          onApply={(list: any[]) => setValue(list)}
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
