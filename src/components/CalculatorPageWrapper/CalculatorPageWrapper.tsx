import { Col, Layout, Row, Space, Spin, Typography } from 'antd'
import type { ColSize } from 'antd/es/grid/col'
import React from 'react'
import type { FCC } from 'src/types'

const { Title, Text } = Typography
const { Footer } = Layout

interface CalculatorPageWrapperProps {
  title: string
  subTitle?: string
  isLoading?: boolean
  showFooter?: boolean
  headerWidthMD?: number | string | ColSize
}
export const CalculatorPageWrapper: FCC<CalculatorPageWrapperProps> = ({
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
            <Col xs={24} md={headerWidthMD || 14}>
              <Space direction='vertical'>
                <Title level={2}>{title}</Title>
                {subTitle ? <Text type='secondary'>{subTitle}</Text> : null}
              </Space>
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

CalculatorPageWrapper.displayName = 'CalculatorPageWrapper'

export default CalculatorPageWrapper
