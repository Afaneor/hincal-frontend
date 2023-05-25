import { Card, Col, Layout, Row, Space, Spin, Typography } from 'antd'
import type { ColSize } from 'antd/es/grid/col'
import React from 'react'
import type { FCC } from 'src/types'

const { Title, Text } = Typography
const { Footer } = Layout

interface PageWrapperProps {
  title: string
  subTitle?: string
  isLoading?: boolean
  showFooter?: boolean
  headerWidthMD?: number | string | ColSize
}
export const PageWrapper: FCC<PageWrapperProps> = ({
  children,
  title,
  subTitle,
  isLoading = false,
  showFooter,
  headerWidthMD,
}) => {
  return (
    <Spin spinning={isLoading} size='large'>
      <Row gutter={[20, 20]} justify='center' style={{ padding: '1%' }}>
        <Col xs={24} md={20}>
          <Row>
            <Col xs={24} md={headerWidthMD || 22}>
              <Card>
                <Space direction='vertical'>
                  <Title level={3}>{title}</Title>
                  {subTitle ? <Text type='secondary'>{subTitle}</Text> : null}
                </Space>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col xs={24} md={24}>
          {children}
        </Col>
      </Row>
      {showFooter ? (
        <Row>
          <Col span={24}>
            <Footer style={{ backgroundColor: '#cecece', height: 550 }} />
          </Col>
        </Row>
      ) : null}
    </Spin>
  )
}

PageWrapper.displayName = 'PageWrapper'

export default PageWrapper
