import { Form, Input, Space } from 'antd'
import React, { useRef, useState } from 'react'
import { useDebouncedCallback } from 'src/hooks/useDebouncedCallback'
import type { BaseModel } from 'src/models'
import { useInfinityFetchData } from 'src/services/base/useInfinityFetchData'
import type { FCC, HTMLElementEvent } from 'src/types'

// eslint-disable-next-line import/no-cycle
import { SelectDropdownListContent } from '@/components/SelectDropdownListContent'
import { TagsInput } from '@/components/TagsInput'

const { Search } = Input

export interface SelectDropdownSearchableProps<T> {
  withoutSearch?: boolean
  listItemsNameKey: string
  filterName: string
  model: typeof BaseModel
  onChange?: (list: T[]) => void
  returnValueType?: 'string' | 'object'
  defList: any[]
  onRemoveItem?: (item: string | unknown) => void
  onSelect?: (item: string | Record<string, any>) => void
}
export const SelectDropdownSearchable: FCC<
  SelectDropdownSearchableProps<string>
> = ({
  withoutSearch,
  children,
  listItemsNameKey,
  filterName,
  model,
  returnValueType = 'string',
  defList,
  onRemoveItem,
  onSelect,
}) => {
  const refSearch = useRef() as any
  const [showDrop, setShowDrop] = useState(false)

  const infinityValues = useInfinityFetchData(
    model,
    {},
    { enabled: showDrop },
    `filter-${model.modelName}`
  )
  const { setFilters, isFetching } = infinityValues

  const handleChange = (e: HTMLElementEvent<HTMLInputElement>) => {
    setShowDrop(true)
    setFilters({ [filterName]: e.target.value })
  }
  const debounceHandleChange = useDebouncedCallback(handleChange, 600)

  return (
    <Space direction='vertical' className='w100'>
      {!withoutSearch ? (
        <Form.Item>
          <Search
            ref={refSearch}
            placeholder='Поиск'
            size='large'
            allowClear
            onChange={debounceHandleChange}
          />
        </Form.Item>
      ) : null}
      {children || (
        <>
          <TagsInput
            singleLine
            list={defList}
            listItemsNameKey={
              returnValueType === 'object' ? listItemsNameKey : undefined
            }
            onClick={() => setShowDrop(true)}
            tagOnCLose={onRemoveItem}
          />
          {showDrop ? (
            <SelectDropdownListContent
              selected={defList}
              returnValueType={returnValueType}
              isLoading={isFetching}
              fetchValues={infinityValues}
              itemName={listItemsNameKey}
              onSelect={(item: any) => onSelect?.(item)}
            />
          ) : null}
        </>
      )}
    </Space>
  )
}

SelectDropdownSearchable.displayName = 'SelectDropdownSearchable'

export default SelectDropdownSearchable
