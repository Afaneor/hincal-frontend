import {
  GlobalOutlined,
  LineChartOutlined,
  SlidersOutlined,
} from '@ant-design/icons'
import { Button, Card, List } from 'antd'
import React from 'react'
import type { FCC } from 'src/types'

import { useMoneyFormat } from '@/hooks/useMoneyFormat'

interface MapHoveCardProps {
  name: string
  website?: string
  averageCadastralValue?: number
  x: number
  y: number
}
export const MapHoveCard: FCC<MapHoveCardProps> = ({
  averageCadastralValue,
  website,
  name,
  x,
  y,
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
        width: 375,
      }}
    >
      <List itemLayout='horizontal'>
        <List.Item>
          <List.Item.Meta
            title='Средние показатели инвестиций в развитие промышленного предприятия'
            avatar={<SlidersOutlined />}
          />
        </List.Item>
        <List.Item>
          <List.Item.Meta
            title={moneyFormat(averageCadastralValue)}
            description='Кадастровая стоимость 1 кв. метра'
            avatar={<LineChartOutlined />}
          />
        </List.Item>
        <List.Item>
          <List.Item.Meta
            title={website}
            description='Официальный сайт округа'
            avatar={<GlobalOutlined />}
          />
        </List.Item>
      </List>
      <List.Item>
        <Button block type='primary'>
          Выбрать
        </Button>
      </List.Item>
    </Card>
  )
}

MapHoveCard.displayName = 'MapHoveCard'

export default MapHoveCard
