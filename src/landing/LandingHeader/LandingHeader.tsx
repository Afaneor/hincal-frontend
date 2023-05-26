import React from 'react'
import styles from './LandingHeader.module.scss'
import { Button, Col, Row, Space } from 'antd'
import { BulbOutlined, QuestionCircleOutlined } from '@ant-design/icons'
import Link from 'next/link'
import { SpaceProps } from 'antd/es/space'

const navLinks = (direction: SpaceProps['direction']) => (
  <Space direction={direction}>
    <Link href={'#what'}>
      <Button
        type={'text'}
        shape={'round'}
        style={{ color: '#ffffff' }}
        icon={<QuestionCircleOutlined />}
      >
        Для чего?
      </Button>
    </Link>
    <Link href={'#possibilities'}>
      <Button
        type={'text'}
        shape={'round'}
        style={{ color: '#ffffff' }}
        icon={<BulbOutlined />}
      >
        Возможности
      </Button>
    </Link>
  </Space>
)

export const LandingHeader = () => {
  return (
    <Row justify={'end'} className={styles.container} gutter={[20, 20]}>
      <Col>
        <Space>
          <Col xs={0} md={24}>
            <Row>{navLinks('horizontal')}</Row>
          </Col>
          <Col xs={2} md={0}>
            <Space direction={'horizontal'}>
              <Link href={'#what'}>
                <Button
                  type={'text'}
                  shape={'round'}
                  icon={<QuestionCircleOutlined />}
                >
                  Для чего?
                </Button>
              </Link>
              <Link href={'#possibilities'}>
                <Button type={'text'} shape={'round'} icon={<BulbOutlined />}>
                  Возможности
                </Button>
              </Link>
            </Space>
          </Col>
        </Space>
      </Col>
    </Row>
  )
}

LandingHeader.displayName = 'LandingHeader'

export default LandingHeader
