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
  onDiselect: () => void
  y: number
  noSelectBtn?: boolean
  isSelected?: boolean
}
export const MapHoverCard: FCC<MapHoverCardProps> = ({
  averageCadastralValue,
  website,
  name,
  x,
  y,
  onSelect,
  noSelectBtn,
  onDiselect,
  isSelected,
}) => {
  const moneyFormat = useMoneyFormat()

  const canvasContainer = document.getElementById('map-box-canvas')
  const canvasHeight = canvasContainer?.offsetHeight || 0

  const card = document.getElementById('card-map-hover')
  const cardOffsetHeight = card?.offsetHeight || 0
  let top = y
  if (y + cardOffsetHeight > canvasHeight) {
    top = y - cardOffsetHeight
  }

  return (
    <Card
      id='card-map-hover'
      title={name}
      type='inner'
      style={{
        position: 'relative',
        left: x + 5,
        top,
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
        <div>
          {!isSelected ? (
            <List.Item>
              <Button block type='primary' onClick={onSelect}>
                Выбрать
              </Button>
            </List.Item>
          ) : (
            <List.Item>
              <Button block onClick={onDiselect}>
                Снять выбор
              </Button>
            </List.Item>
          )}
        </div>
      ) : null}
    </Card>
  )
}

MapHoverCard.displayName = 'MapHoverCard'

export default MapHoverCard
