import 'antd/dist/reset.css'
import '../styles/global.css'

import { Col, Layout, Row } from 'antd'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import React from 'react'

import { Header } from '@/layouts/Header'

const { Content } = Layout

const contentStyle = { padding: '1% 10%', overflow: 'scroll' }
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout className='h100'>
      <Header />
      <Content className='site-layout' style={contentStyle}>
        <Row justify='center'>
          <Col xs={24} md={18}>
            <Component {...pageProps} />
          </Col>
        </Row>
      </Content>
    </Layout>
  )
}

export default appWithTranslation(MyApp)
