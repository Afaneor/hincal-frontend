import { Card, Col, Row, Space, Typography } from 'antd'
import React from 'react'
import type { FCC } from 'src/types'

const { Title, Text } = Typography

interface PageWrapperProps {
  title: string
  subTitle: string
}
export const PageWrapper: FCC<PageWrapperProps> = ({
  children,
  title,
  subTitle,
}) => {
  return (
    <Row gutter={[20, 20]} justify='center' style={{ padding: '1%' }}>
      <Col xs={24} md={20}>
        <Row>
          <Col xs={24} md={20}>
            <Card>
              <Space direction='vertical'>
                <Title level={3}>{title}</Title>
                <Text type='secondary'>{subTitle}</Text>
              </Space>
            </Card>
          </Col>
        </Row>
      </Col>
      <Col xs={24} md={20}>
        {children}
      </Col>
    </Row>
  )
}

PageWrapper.displayName = 'PageWrapper'

export default PageWrapper
