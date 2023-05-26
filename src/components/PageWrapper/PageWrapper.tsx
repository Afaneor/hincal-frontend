import { Card, Col, Row, Space, Typography } from 'antd'
import React from 'react'
import type { FCC } from 'src/types'

import styles from './PageWrapper.module.scss'

const { Title, Text } = Typography
interface PageWrapperProps {
  title: string
  subTitle?: string
}
const titleStyle = { position: 'sticky', paddingTop: 10 } as Record<string, any>
const PageWrapper: FCC<PageWrapperProps> = ({ children, subTitle, title }) => {
  return (
    <Row className={styles.container} justify='center'>
      <Col xs={24} md={18}>
        <Row>
          <Col span={24} style={titleStyle}>
            <Card>
              <Space direction='vertical'>
                <Title level={3}>{title}</Title>
                {subTitle ? <Text type='secondary'>{subTitle}</Text> : null}
              </Space>
            </Card>
          </Col>
          <Col span={24}>{children}</Col>
        </Row>
      </Col>
    </Row>
  )
}

PageWrapper.displayName = 'PageWrapper'

export default PageWrapper
