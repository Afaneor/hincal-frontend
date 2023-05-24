import React from 'react'
import styles from './Block3.module.scss'
import { Col, Row, Space, Typography } from 'antd'
import CalcMap from '../../components/CalcMap/CalcMap'
const { Title, Text } = Typography

export const Block3 = () => {
  return (
    <div
      id='possibilities'
      className={styles.container}
      data-testid='test-Block3'
    >
      <Row style={{ paddingTop: '30px' }} justify={'center'}>
        <Col span={24} style={{ textAlign: 'center' }}>
          <Space direction={'vertical'}>
            <Title>Удобный инструментарий</Title>
            <Text>
              Выбрать предполагаемый район и посмотреть аналитику можно прямо на
              карте
            </Text>
          </Space>
        </Col>
      </Row>
      <Row>
        <CalcMap freezeMap />
      </Row>
    </div>
  )
}

Block3.displayName = 'Block3'

export default Block3
