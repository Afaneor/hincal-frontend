import { Col, Layout, Row } from 'antd'
import type { ReactNode } from 'react'
import React from 'react'

import { Header } from '@/components/Header'

const { Content } = Layout

type IMainProps = {
  meta: ReactNode
  children: ReactNode
}
const contentStyle = { padding: 0 }

const Main = (props: IMainProps) => (
  <>
    {props.meta}
    <Layout className='h100'>
      <Header />
      <Content className='site-layout' style={contentStyle}>
        <Row justify='center'>
          <Col span={24}>
            <main className='content py-5 text-xl'>{props.children}</main>
          </Col>
        </Row>
      </Content>
    </Layout>
  </>
)

export { Main }
