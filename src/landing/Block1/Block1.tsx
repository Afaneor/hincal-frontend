import React from 'react'
import styles from './Block1.module.scss'
import { Button, Col, Row, Space, Typography } from 'antd'
import Link from 'next/link'
const { Title } = Typography

const btnToCalc = { fontSize: 20, height: 50 }

export const Block1 = () => {
  return (
    <Row justify={'center'} className={styles.image}>
      <Col xs={23} md={20} style={{ alignSelf: 'center' }}>
        <Row gutter={[20, 20]}>
          <Col md={12} xs={24}>
            <Space direction={'vertical'}>
              <Title className={styles.title}>
                Калькулятор инвестиций
                <br />в развитие промышленного предприятия
              </Title>
              <Title level={3} className={styles.subtitle}>
                Отправная точка ваших идей
              </Title>
              <Link href={'/calculator'}>
                <Button
                  size={'large'}
                  shape={'round'}
                  type={'primary'}
                  style={btnToCalc}
                >
                  Воспользоваться калькулятором
                </Button>
              </Link>
            </Space>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

Block1.displayName = 'Block1'

export default Block1
