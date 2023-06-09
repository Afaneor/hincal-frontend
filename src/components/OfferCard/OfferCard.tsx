import { Card, Descriptions } from 'antd'
import React from 'react'
import type { FCC } from 'src/types'

interface OfferCardProps {
  title: string
  description: string
  interest_rate: string
  loan_term: string
  amount: string
}

const styleCard = { height: '100%', maxWidth: 400 }

const OfferCard: FCC<OfferCardProps> = ({
  title,
  description,
  interest_rate,
  loan_term,
  amount,
}) => {
  return (
    <Card style={styleCard} title={title}>
      <Descriptions column={1}>
        <Descriptions.Item label='Описание'>{description}</Descriptions.Item>

        <Descriptions.Item label='Процентная ставка'>
          {interest_rate}
        </Descriptions.Item>
        <Descriptions.Item label='Срок займа'>{loan_term}</Descriptions.Item>
        <Descriptions.Item label='Сумма займа'>{amount}</Descriptions.Item>
      </Descriptions>
    </Card>
  )
}

OfferCard.displayName = 'OfferCard'

export default OfferCard
