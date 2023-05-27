import { Avatar, Card, List } from 'antd'
import React from 'react'
import type { FCC } from 'src/types'

import type { PostModelProps } from '@/models'

interface OffersListInfinityRenderProps {
  fetchedValues?: any
}

const OffersListInfinityRender: FCC<OffersListInfinityRenderProps> = ({
  fetchedValues,
}) => {
  return (
    <Card style={{ marginTop: 10 }}>
      <List
        itemLayout='horizontal'
        size='large'
        dataSource={[...fetchedValues.rowData, ...fetchedValues.rowData]}
        renderItem={(item: PostModelProps) => (
          <List.Item key={item.id}>
            <List.Item.Meta
              avatar={
                <Avatar
                  size='large'
                  src='https://xsgames.co/randomusers/avatar.php?g=pixel&key=3'
                />
              }
              title={item.title}
              description={item.text}
            />
          </List.Item>
        )}
      />
    </Card>
  )
}

OffersListInfinityRender.displayName = 'OffersListInfinityRender'

export default OffersListInfinityRender
