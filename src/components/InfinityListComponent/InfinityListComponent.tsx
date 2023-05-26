import { Divider, Skeleton } from 'antd'
import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import type { FCC } from 'src/types'

import { BlogPostListItems } from '@/components/BlogPostListItems'
import styles from '@/components/SelectDropdownListContent/style.module.scss'
import type { BaseModel } from '@/models'
import { useInfinityFetchData } from '@/services/base/useInfinityFetchData'

interface InfinityListComponentProps {
  model: typeof BaseModel
  noDataText?: string
}

const scrollableDivStyle = {
  height: '100vh',
  overflow: 'auto',
}

const InfinityListComponent: FCC<InfinityListComponentProps> = ({
  model,
  noDataText,
}) => {
  const fetchedValues = useInfinityFetchData(
    model,
    {},
    {},
    `filter-${model.modelName}`
  )
  return (
    <div id='scrollableDiv' style={scrollableDivStyle}>
      <InfiniteScroll
        dataLength={fetchedValues?.rowData?.length}
        next={fetchedValues?.fetchNextPage}
        hasMore={!!fetchedValues?.hasNextPage}
        loader={
          <Skeleton.Node active className={styles.skeletonNode}>
            <span>Загрузка...</span>
          </Skeleton.Node>
        }
        endMessage={
          fetchedValues?.rowData?.length ? (
            <Divider plain>{noDataText || 'Больше нет'}</Divider>
          ) : null
        }
        scrollableTarget='scrollableListGrid'
        height='100vh'
      >
        <BlogPostListItems fetchedValues={fetchedValues} />
      </InfiniteScroll>
    </div>
  )
}

InfinityListComponent.displayName = 'InfinityListComponent'

export default InfinityListComponent
