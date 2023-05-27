import { Button, Row, Spin } from 'antd'
import React from 'react'
import type { FCC } from 'src/types'

import type { BaseModel } from '@/models'
import { useInfinityFetchData } from '@/services/base/useInfinityFetchData'

import styles from './FetchMoreItemsComponent.module.scss'

interface FetchMoreItemsComponentProps {
  model: typeof BaseModel
  defFilters?: Record<string, any>
  renderItems: (data: any[]) => React.ReactNode
}

const FetchMoreItemsComponent: FCC<FetchMoreItemsComponentProps> = ({
  model: Model,
  defFilters,
  renderItems,
}) => {
  const { rowData, fetchNextPage, isLoading, isFetching, hasNextPage }: any =
    useInfinityFetchData(Model, defFilters, {})

  return (
    <>
      <Spin spinning={isLoading}>{renderItems(rowData)}</Spin>
      {hasNextPage ? (
        <Row justify='center' className={styles.fetchMoreBtnWrapper}>
          <Button type='dashed' loading={isFetching} onClick={fetchNextPage}>
            Показать еще
          </Button>
        </Row>
      ) : null}
    </>
  )
}

FetchMoreItemsComponent.displayName = 'FetchMoreItemsComponent'

export default FetchMoreItemsComponent
