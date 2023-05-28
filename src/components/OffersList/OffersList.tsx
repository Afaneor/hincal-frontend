import { Card, List, Tag } from 'antd'
import Link from 'next/link'
import React from 'react'
import type { FCC } from 'src/types'

import { FetchMoreItemsComponent } from '@/components/FetchMoreItemsComponent'
import type { BaseModel } from '@/models'
import type { OfferModelProps } from '@/models/Offer'

interface OffersListProps {
  model: typeof BaseModel
}

const ItemText = ({
  label,
  value,
}: {
  label: string
  value: string | number
}) => (
  <div>
    <span>{label}:</span> <Tag>{value}</Tag>
  </div>
)

const OffersList: FCC<OffersListProps> = ({ model: Model }) => {
  return (
    <Card style={{ marginTop: 20 }} title='Все предложения'>
      <List itemLayout='vertical'>
        <FetchMoreItemsComponent
          model={Model}
          defFilters={{ limit: 2 }}
          renderItems={(rowData) =>
            rowData?.map((item: OfferModelProps) => (
              <List.Item
                key={item.id}
                actions={[
                  <ItemText
                    key='interest_rate'
                    label='Процентная ставка'
                    value={item.interest_rate}
                  />,
                  <ItemText
                    key='loan_term'
                    label='Срок займа'
                    value={item.loan_term}
                  />,
                  <ItemText
                    key='amount'
                    label='Сумма займа'
                    value={item.amount}
                  />,
                  <Link target='_blank' key='detail-link' href={item?.site}>
                    Подробнее
                  </Link>,
                ]}
              >
                <List.Item.Meta
                  title={
                    <Link target='_blank' href={item?.site}>
                      {item?.title}
                    </Link>
                  }
                  description={item?.text}
                />
              </List.Item>
            ))
          }
        />
      </List>
    </Card>
  )
}

OffersList.displayName = 'OffersList'

export default OffersList
