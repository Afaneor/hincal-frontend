import {
  BarChartOutlined,
  CalculatorOutlined,
  LaptopOutlined,
  SketchOutlined,
  UsergroupAddOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Button, Col, Layout, Row, Typography } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

import type { FCC } from '@/types'

import styles from './Header.module.scss'

const { Header: AntdHeader } = Layout
const { Text } = Typography

const links = [
  {
    text: 'Калькулятор',
    href: '/calculator',
    icon: <CalculatorOutlined />,
  },
  {
    text: 'Найти партнера',
    href: '/partners',
    icon: <UsergroupAddOutlined />,
  },
  {
    text: 'Крупным инвесторам',
    href: '/investors',
    icon: <SketchOutlined />,
  },
  {
    text: 'Аналитика',
    href: '/analytics',
    icon: <BarChartOutlined />,
  },
  {
    text: 'Блог',
    href: '/blog',
    icon: <LaptopOutlined />,
  },
]
export const Header: FCC = () => {
  const router = useRouter()

  return (
    <AntdHeader className={styles.headerContainer}>
      <Row justify='space-between' style={{ width: '100%' }}>
        <Col flex='auto'>
          <Text className={styles.logoText}>Hincal</Text>
        </Col>

        <Col flex='auto'>
          <Row>
            {links.map((link) => (
              <div
                key={link.href}
                className={
                  router.pathname === link.href ? styles.activeLink : ''
                }
              >
                <Link href={link.href}>
                  <Button type='link' icon={link.icon}>
                    {link.text}
                  </Button>
                </Link>
              </div>
            ))}
          </Row>
        </Col>
        <Col flex='auto' className={styles.authSection}>
          <Link href='/login'>
            <Button type='primary' shape='circle' icon={<UserOutlined />} />
          </Link>
        </Col>
      </Row>
    </AntdHeader>
  )
}

Header.displayName = 'Header'

export default Header
