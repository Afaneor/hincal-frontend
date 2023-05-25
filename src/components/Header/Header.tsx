import { UserOutlined } from '@ant-design/icons'
import { Button, Col, Layout, Row } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

import { BurgerDropdownLinks } from '@/components'
import { Logo } from '@/components/_icons/logo/Logo'
import type { FCC } from '@/types'

import styles from './Header.module.scss'
import { Links } from './Links'

const { Header: AntdHeader } = Layout

export const Header: FCC = () => {
  const router = useRouter()
  return (
    <AntdHeader className={styles.headerContainer}>
      <Row justify='space-between' style={{ width: '100%' }} gutter={[5, 10]}>
        <Col flex='auto' style={{ display: 'flex', alignItems: 'center' }}>
          <Logo />
        </Col>

        <Col flex='auto' xs={0} md={24}>
          <Row>
            {Links.map((link) => (
              <div
                key={link.href}
                className={`${
                  router.pathname === link.href || router.asPath === link.href
                    ? styles.activeLink
                    : ''
                } ${styles.navLink}`}
              >
                <Link href={link.href}>
                  <Button color='black' type='link' icon={link.icon}>
                    {link.text}
                  </Button>
                </Link>
              </div>
            ))}
          </Row>
        </Col>
        <Col flex='auto' className={styles.authSection}>
          <Link href='/login'>
            <Button shape='circle' icon={<UserOutlined />} />
          </Link>
        </Col>
        <Col md={0}>
          <BurgerDropdownLinks />
        </Col>
      </Row>
    </AntdHeader>
  )
}

Header.displayName = 'Header'

export default Header
