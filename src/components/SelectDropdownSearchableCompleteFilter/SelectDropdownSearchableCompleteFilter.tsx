import { Card, Space } from 'antd'
import React from 'react'
import type { BaseModel } from 'src/models'
import type { FCC } from 'src/types'

import { ApplyClearFilterBtns } from '@/components/ApplyClearFilterBtns'
// eslint-disable-next-line import/no-cycle
import { SelectDropdownSearchable } from '@/components/SelectDropdownSearchable'
import { useListState } from '@/hooks/useListState'

interface SelectDropdownSearchableCompleteFilterProps {
  defList?: any
  model: typeof BaseModel
  onApply: (list: any[]) => void
  filterName: string
  listItemsNameKey: string
  returnValueType: 'string' | 'object'
}
const SelectDropdownSearchableCompleteFilter: FCC<
  SelectDropdownSearchableCompleteFilterProps
> = ({
  defList,
  model,
  onApply,
  filterName,
  listItemsNameKey,
  returnValueType = 'object',
}) => {
  const { list, addItemsToList, removeItemFromList, clearList } = useListState(
    defList || []
  )
  const handleClearList = () => {
    onApply(clearList())
  }
  const handleSetValues = (item: string | Record<string, any>) => {
    addItemsToList([item])
  }

  const handleRemoveItem = (item: string | unknown) => {
    removeItemFromList(item)
  }
  return (
    <Card hoverable style={{ maxWidth: 375 }}>
      <Space size={12} direction='vertical' className='w100'>
        <SelectDropdownSearchable
          defList={list}
          returnValueType={returnValueType}
          model={model}
          filterName={filterName}
          listItemsNameKey={listItemsNameKey}
          onSelect={handleSetValues}
          onRemoveItem={handleRemoveItem}
        />
        <ApplyClearFilterBtns
          textApplyBtn='Применить'
          onClear={handleClearList}
          onApply={() => onApply(list)}
        />
      </Space>
    </Card>
  )
}

SelectDropdownSearchableCompleteFilter.displayName =
  'SelectDropdownSearchableCompleteFilter'

export default SelectDropdownSearchableCompleteFilter
