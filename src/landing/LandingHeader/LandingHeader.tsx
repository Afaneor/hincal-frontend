import React from 'react'
import styles from './LandingHeader.module.scss'
import { Button, Card, Col, Row, Space } from 'antd'
import {
  BulbOutlined,
  CalculatorOutlined,
  QuestionCircleOutlined,
  UserOutlined,
} from '@ant-design/icons'
import Link from 'next/link'
import { Logo } from '@/components/_icons/logo/Logo'
import { BurgerDropdownLinks } from '@/components'
import { SpaceProps } from 'antd/es/space'

const navLinks = (direction: SpaceProps['direction']) => (
  <Space direction={direction}>
    <Link href={'#what'}>
      <Button type={'text'} shape={'round'} icon={<QuestionCircleOutlined />}>
        Для чего?
      </Button>
    </Link>
    <Link href={'#possibilities'}>
      <Button type={'text'} shape={'round'} icon={<BulbOutlined />}>
        Возможности
      </Button>
    </Link>
    <Link href={'/calculator'}>
      <Button type={'text'} shape={'round'} icon={<CalculatorOutlined />}>
        Калькулятор
      </Button>
    </Link>
  </Space>
)

export const LandingHeader = () => {
  return (
    <Row
      justify={'space-between'}
      className={styles.container}
      gutter={[20, 20]}
    >
      <Col>
        <Logo />
      </Col>
      <Col>
        <Space>
          <Col xs={0} md={24}>
            <Row>{navLinks('horizontal')}</Row>
          </Col>
          <Col xs={2} md={0}>
            <BurgerDropdownLinks
              type={'text'}
              dropdownRender={<Card>{navLinks('vertical')}</Card>}
            />
          </Col>
          <Link href='/login'>
            <Button type={'text'} shape='circle' icon={<UserOutlined />} />
          </Link>
        </Space>
      </Col>
    </Row>
  )
}

LandingHeader.displayName = 'LandingHeader'

export default LandingHeader
