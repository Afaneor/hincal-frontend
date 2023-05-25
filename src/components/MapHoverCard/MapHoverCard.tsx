import { GlobalOutlined, LineChartOutlined } from '@ant-design/icons'
import { Button, Card, List } from 'antd'
import React from 'react'
import type { FCC } from 'src/types'

import { useMoneyFormat } from '@/hooks/useMoneyFormat'

interface MapHoverCardProps {
  name: string
  website?: string
  averageCadastralValue?: number
  x: number
  onSelect: () => void
  y: number
  noSelectBtn?: boolean
}
export const MapHoverCard: FCC<MapHoverCardProps> = ({
  averageCadastralValue,
  website,
  name,
  x,
  y,
  onSelect,
  noSelectBtn,
}) => {
  const moneyFormat = useMoneyFormat()
  return (
    <Card
      title={name}
      type='inner'
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: 350,
      }}
    >
      <List itemLayout='horizontal'>
        <List.Item>
          <List.Item.Meta title='Средние показатели инвестиций в развитие промышленного предприятия' />
        </List.Item>
        <List.Item>
          <List.Item.Meta
            title={moneyFormat(averageCadastralValue)}
            description='Кадастровая стоимость 1 кв. метра'
            avatar={<LineChartOutlined />}
          />
        </List.Item>
        {website ? (
          <List.Item>
            <List.Item.Meta
              title={website}
              description='Официальный сайт округа'
              avatar={<GlobalOutlined />}
            />
          </List.Item>
        ) : null}
      </List>
      {!noSelectBtn ? (
        <List.Item>
          <Button block type='primary' onClick={onSelect}>
            Выбрать
          </Button>
        </List.Item>
      ) : null}
    </Card>
  )
}

MapHoverCard.displayName = 'MapHoverCard'

export default MapHoverCard
