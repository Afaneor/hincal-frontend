import { List } from 'antd'
import clsx from 'clsx'
import { get } from 'lodash'
import React from 'react'
import type { SelectDropdownListsContentCommonProps } from 'src/components/SelectDropdownListContent'
import type { FCC } from 'src/types'

import styles from './style.module.scss'

interface SelectDropdownListStringContentProps
  extends SelectDropdownListsContentCommonProps {
  onSelect: (item: string) => void
  selected: string[]
}
export const SelectDropdownListStringContent: FCC<
  SelectDropdownListStringContentProps
> = ({ isLoading, dataSource, itemName, onSelect, selected }) => {
  const prep = dataSource.map((item: Record<string, any>) =>
    get(item, itemName, '-')
  )
  // @ts-ignore
  const uniqItems = [...new Set(prep)]
  return (
    <List
      loading={isLoading}
      size='small'
      dataSource={uniqItems}
      renderItem={(item: string) => (
        <List.Item
          className={clsx(
            styles.listItem,
            // eslint-disable-next-line
            !~selected.indexOf(item) ? '' : styles.disabledListItem
          )}
          key={item}
          onClick={() => {
            onSelect(item)
          }}
        >
          {item}
        </List.Item>
      )}
    />
  )
}

SelectDropdownListStringContent.displayName = 'SelectDropdownListStringContent'

export default SelectDropdownListStringContent
