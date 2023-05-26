import { Col, Layout, Row } from 'antd'
import type { ReactNode } from 'react'
import React from 'react'

import { Header } from '@/components/Header'
import { SmoothOpacity } from '@/components/SmoothOpacity'

const { Content } = Layout

type IMainProps = {
  meta: ReactNode
  children: ReactNode
}
const styleContent = {
  padding: 0,
} as Record<string, any>

const Main = (props: IMainProps) => {
  return (
    <>
      {props.meta}
      <Layout className='h100'>
        <Header />
        <Content style={styleContent}>
          <Row justify='center'>
            <Col span={24}>
              <SmoothOpacity>
                <main>{props.children}</main>
              </SmoothOpacity>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  )
}

export { Main }
