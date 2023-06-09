import { Badge, Card, Descriptions, Divider, Tag, Typography } from 'antd'
import type { CSSProperties } from 'react'
import React from 'react'
import type { FCC } from 'src/types'

const { Text, Title } = Typography

interface SupportCardProps {
  is_actual: boolean
  title: string
  text: string
  amount: string
  style?: CSSProperties
}

const SupportCard: FCC<SupportCardProps> = ({
  is_actual,
  title,
  amount,
  text,
  style,
}) => {
  return (
    <Badge.Ribbon
      text={is_actual ? 'Актуально' : 'Не актуально'}
      color={is_actual ? 'blue' : 'red'}
    >
      <Card hoverable style={{ height: '100%', ...style }}>
        <Title level={5}>{title}</Title>
        <Divider />
        <Descriptions column={1}>
          <Descriptions.Item label='Размер субсидий'>
            {amount ? <Tag>{amount}</Tag> : '-'}
          </Descriptions.Item>
        </Descriptions>
        <Text type='secondary'>{text}</Text>
      </Card>
    </Badge.Ribbon>
  )
}

SupportCard.displayName = 'SupportCard'

export default SupportCard
