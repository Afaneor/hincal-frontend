import { Avatar, Button, Card, List, Skeleton } from 'antd'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import type { FCC } from 'src/types'

import { useFilter } from '@/hooks/useFilter'
import type { BaseModel } from '@/models'
import { useFetchItems } from '@/services/base/hooks'

interface OffersListProps {
  model: typeof BaseModel
}

const count = 3

const OffersList: FCC<OffersListProps> = ({ model }) => {
  const [limit, setLimit] = useState(2)
  const [filter, setFilter] = useFilter({ limit: 2 })
  const [list, setList] = useState<any[]>([])

  const { data, results } = useFetchItems(model, filter)

  useEffect(() => {
    setList([])
  }, [results])

  const onLoadMore = () => {
    setLimit((prevState) => prevState + 1)
    setFilter({ limit: limit + 1 })
    setList(
      list.concat(
        [...new Array(count)].map(() => ({
          loading: true,
          name: {},
          picture: {},
        }))
      )
    )
    window.dispatchEvent(new Event('resize'))
  }

  const loadMore =
    data?.data?.count > results?.length ? (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
        <Button onClick={onLoadMore}>Показать ещё</Button>
      </div>
    ) : null

  return (
    <Card style={{ marginTop: 20 }} title='Все предложения'>
      <List
        className='demo-loadmore-list'
        // loading={isLoading}
        itemLayout='horizontal'
        loadMore={loadMore}
        dataSource={results}
        renderItem={(item: any) => (
          <List.Item
            actions={[
              <Link target='_blank' key='detail-link' href={item?.site}>
                Подробнее
              </Link>,
            ]}
          >
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={<Avatar src={item?.picture?.large || ''} />}
                title={
                  <Link target='_blank' href={item?.site}>
                    {item?.title}
                  </Link>
                }
                description={item?.text}
              />
            </Skeleton>
          </List.Item>
        )}
      />
    </Card>
  )
}

OffersList.displayName = 'OffersList'

export default OffersList
