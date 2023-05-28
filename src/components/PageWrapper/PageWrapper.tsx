import { Col, Row, Space, Spin, Typography } from 'antd'
import React from 'react'
import type { FCC } from 'src/types'

import styles from './PageWrapper.module.scss'

const { Title, Text } = Typography
interface PageWrapperProps {
  title?: string
  subTitle?: string
  isLoading?: boolean
}
const titleStyle = { paddingTop: 10, marginBottom: 10 } as Record<string, any>
const PageWrapper: FCC<PageWrapperProps> = ({
  isLoading,
  children,
  subTitle,
  title,
}) => {
  return (
    <Spin spinning={!!isLoading}>
      <Row className={styles.container} justify='center'>
        <Col xs={24} md={16}>
          <Row>
            {title ? (
              <Col xs={24} md={12} style={titleStyle}>
                <Space direction='vertical'>
                  <Title level={2}>{title}</Title>
                  {subTitle ? <Text type='secondary'>{subTitle}</Text> : null}
                </Space>
              </Col>
            ) : null}
            <Col span={24}>{children}</Col>
          </Row>
        </Col>
      </Row>
    </Spin>
  )
}

PageWrapper.displayName = 'PageWrapper'

export default PageWrapper
