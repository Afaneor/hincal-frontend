import 'antd/dist/reset.css'
import '../styles/global.css'

import { Col, Layout, Row } from 'antd'
import type { AppProps } from 'next/app'
import React from 'react'

import { Header } from '@/layouts/Header'

const { Content } = Layout

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout style={{ height: '100%' }}>
      <Header />
      <Content className='site-layout' style={{ padding: '1% 15%' }}>
        <Row justify='center'>
          <Col xs={23} md={18}>
            <Component {...pageProps} />
          </Col>
        </Row>
      </Content>
    </Layout>
  )
}

export default MyApp
