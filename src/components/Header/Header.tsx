import { Button, Col, Layout, Row } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

// eslint-disable-next-line import/extensions
import { Logo } from '@/components/_icons/logo/Logo'
// eslint-disable-next-line import/extensions
import { AuthComponent } from '@/components/AuthComponent'
// eslint-disable-next-line import/extensions
import { BurgerDropdownLinks } from '@/components/BurgerDropdownLinks/BurgerDropdownLinks'
import type { FCC } from '@/types'

import styles from './Header.module.scss'
import { Links } from './Links'

const { Header: AntdHeader } = Layout

const logoStyle = { display: 'flex', alignItems: 'center' }

export const Header: FCC = () => {
  const router = useRouter()
  return (
    <AntdHeader className={styles.headerContainer}>
      <Row justify='space-between' style={{ width: '100%' }} gutter={[5, 10]}>
        <Col flex='auto' style={logoStyle}>
          <Link href='/calculator' style={logoStyle}>
            <Logo />
          </Link>
        </Col>

        <Col flex='auto' xs={0} md={0} xl={24}>
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
                  <Button color='black' type='link'>
                    {link.text}
                  </Button>
                </Link>
              </div>
            ))}
          </Row>
        </Col>
        <Col flex='auto' className={styles.authSection}>
          <AuthComponent />
        </Col>
        <Col xl={0}>
          <BurgerDropdownLinks />
        </Col>
      </Row>
    </AntdHeader>
  )
}

Header.displayName = 'Header'

export default Header
