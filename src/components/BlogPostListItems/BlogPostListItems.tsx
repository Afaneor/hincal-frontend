import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons'
import { Card, Col, List, Row, Space } from 'antd'
import React from 'react'

import type { PostModelProps } from '@/models'

import { SmoothOpacity } from '../SmoothOpacity'

interface BlogPostListItemsProps {
  fetchedValues: any
}

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
)

const BlogPostListItems: React.FC<BlogPostListItemsProps> = ({
  fetchedValues,
}) => (
  <List
    itemLayout='vertical'
    size='large'
    dataSource={fetchedValues.rowData}
    renderItem={(item: PostModelProps) => (
      <SmoothOpacity style={{ padding: '10px 0' }}>
        <Card
          title={item.title}
          hoverable
          actions={[
            <IconText
              icon={StarOutlined}
              text='156'
              key='list-vertical-star-o'
            />,
            <IconText
              icon={LikeOutlined}
              text='156'
              key='list-vertical-like-o'
            />,
            <IconText
              icon={MessageOutlined}
              text='2'
              key='list-vertical-message'
            />,
          ]}
        >
          <List.Item key={item.title}>
            <Row gutter={[20, 20]}>
              <Col xs={{ order: 1, span: 24 }} md={{ order: 0, span: 20 }}>
                {item.text}
              </Col>
              <Col xs={{ order: 0, span: 24 }} md={4}>
                <img width='100%' alt='logo' src={item.preview_image} />
              </Col>
            </Row>
          </List.Item>
        </Card>
      </SmoothOpacity>
    )}
  />
)

export default BlogPostListItems
