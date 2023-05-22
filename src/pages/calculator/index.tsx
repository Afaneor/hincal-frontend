import { Anchor, Card, Col, Row, Space, Typography } from 'antd'
import React from 'react'
import type { FCC } from 'src/types'

import { CalcMap } from '@/components/CalcMap'

const { Title, Text } = Typography

const anchorItems = [
  {
    key: 'part-1',
    href: '#part-1',
    title: 'Территория расположения производства',
  },
  {
    key: 'part-2',
    href: '#part-2',
    title: 'Отрасль ведения хозяйственной деятельности',
  },
  {
    key: 'part-3',
    href: '#part-3',
    title: 'Part 3',
  },
]
const Calculator: FCC = () => {
  return (
    <Row gutter={[20, 20]}>
      <Col span={24}>
        <Card>
          <Space direction='vertical'>
            <Title level={3}>
              Калькулятор инвестиций в развитии промышленного предприятия
            </Title>
            <Text type='secondary'>
              Инструмент позволит быстро и качественно рассчитать объем
              требуемых вложений
            </Text>
          </Space>
        </Card>
      </Col>
      <Col xs={24} md={0}>
        <Anchor
          style={{ backgroundColor: 'white' }}
          direction='vertical'
          offsetTop={65}
          items={anchorItems}
        />
      </Col>
      <Col xs={24} md={20}>
        <div
          id='part-1'
          style={{
            height: '100vh',
          }}
        >
          <CalcMap />
        </div>
        <div id='part-2' style={{ height: '100vh', background: 'red' }} />
      </Col>
      <Col md={4}>
        <Anchor offsetTop={65} items={anchorItems} />
      </Col>
    </Row>
  )
}

Calculator.displayName = 'Calculator'

export default Calculator
