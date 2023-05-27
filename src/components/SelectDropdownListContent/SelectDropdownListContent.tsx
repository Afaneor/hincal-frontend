import { Card, Divider, Skeleton } from 'antd'
import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import type { FCC } from 'src/types'

import { SelectDropdownListObjectsContent } from './SelectDropdownListObjectsContent'
import { SelectDropdownListStringContent } from './SelectDropdownListStringContent'
import styles from './style.module.scss'

const { Grid } = Card

export interface SelectDropdownListsContentCommonProps {
  isLoading?: boolean
  dataSource: any
  itemName: string
}
interface SelectDropdownListContentProps {
  onSelect: (item: string | Record<string, any>) => void
  fetchValues: Record<string, any>
  itemName: string
  isLoading?: boolean
  returnValueType?: 'object' | 'string'
  selected?: any
}

export const SelectDropdownListContent: FCC<SelectDropdownListContentProps> = ({
  onSelect,
  fetchValues,
  itemName,
  isLoading,
  returnValueType = 'string',
  selected,
}) => {
  const handleOnSelectString = (item: string) => {
    onSelect(item)
  }
  const handleOnSelectObj = (item: Record<string, any>) => {
    onSelect(item)
  }
  return (
    <Grid
      id='scrollableListGrid'
      className={styles.scrollableListGrid}
      hoverable={false}
    >
      <InfiniteScroll
        dataLength={fetchValues?.rowData?.length}
        next={fetchValues.fetchNextPage}
        hasMore={fetchValues.hasNextPage}
        loader={
          <Skeleton.Node active className={styles.skeletonNode}>
            <span>Загрузка...</span>
          </Skeleton.Node>
        }
        endMessage={
          fetchValues?.rowData?.length ? (
            <Divider plain>Больше нет</Divider>
          ) : null
        }
        scrollableTarget='scrollableListGrid'
        height={130}
      >
        {returnValueType === 'string' ? (
          <SelectDropdownListStringContent
            selected={selected}
            isLoading={isLoading}
            dataSource={fetchValues.rowData}
            itemName={itemName}
            onSelect={handleOnSelectString}
          />
        ) : (
          <SelectDropdownListObjectsContent
            selected={selected}
            isLoading={isLoading}
            dataSource={fetchValues.rowData}
            itemName={itemName}
            onSelect={handleOnSelectObj}
          />
        )}
      </InfiniteScroll>
    </Grid>
  )
}

SelectDropdownListContent.displayName = 'SelectDropdownListContent'

export default SelectDropdownListContent
