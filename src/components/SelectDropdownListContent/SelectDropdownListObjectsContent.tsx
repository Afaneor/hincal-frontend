import { List } from 'antd'
import clsx from 'clsx'
import { get } from 'lodash'
import React, { useContext } from 'react'
import type { SelectDropdownListsContentCommonProps } from 'src/components/SelectDropdownListContent'
import type { FCC } from 'src/types'

// eslint-disable-next-line import/no-cycle
import { SelectSearchableAsyncContext } from '@/components/SelectSearchableAsync/SelectSearchableAsync'

import styles from './style.module.scss'

interface SelectDropdownListObjectsContentProps
  extends SelectDropdownListsContentCommonProps {
  onSelect: (item: Record<string, any>) => void
  selected: Record<string, any>[]
}
export const SelectDropdownListObjectsContent: FCC<
  SelectDropdownListObjectsContentProps
> = ({ selected, isLoading, dataSource, itemName, onSelect }) => {
  const context = useContext(SelectSearchableAsyncContext)
  return (
    <List
      loading={isLoading}
      size='small'
      dataSource={dataSource}
      renderItem={(item: Record<string, any>) => (
        <List.Item
          className={clsx(
            styles.listItem,
            selected.find((sel) => sel.id === item.id)
              ? styles.disabledListItem
              : '',
            context?.single && selected.length === 1
              ? styles.disabledListItem
              : ''
          )}
          key={item.id}
          onClick={() => {
            onSelect(item)
          }}
        >
          {get(item, itemName, '-')}
        </List.Item>
      )}
    />
  )
}

SelectDropdownListObjectsContent.displayName =
  'SelectDropdownListObjectsContent'

export default SelectDropdownListObjectsContent
