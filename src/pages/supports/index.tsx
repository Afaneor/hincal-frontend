import {
  Badge,
  Card,
  Col,
  Descriptions,
  Divider,
  Row,
  Tag,
  Typography,
} from 'antd'
import Link from 'next/link'
import React from 'react'

import { FetchMoreItemsComponent } from '@/components/FetchMoreItemsComponent'
import { PageWrapper } from '@/components/PageWrapper'
import { Meta } from '@/layouts/Meta'
import type { SupportModelProps } from '@/models'
import { SupportModel } from '@/models'
import { Main } from '@/templates/Main'

const { Title, Text } = Typography

const Model = SupportModel

const Supports = () => {
  return (
    <Main
      meta={
        <Meta title='Поддержка бизнеса' description='Мера поддержки бизнеса' />
      }
    >
      <PageWrapper
        title='Меры поддержки бизнеса'
        subTitle='Здесь собраны все доступные меры поддержки для вашего бизнеса'
      >
        <FetchMoreItemsComponent
          model={Model}
          renderItems={(rowData) => (
            <Row gutter={[20, 20]}>
              {rowData?.map((support: SupportModelProps) => (
                <Col key={support.id} xs={24} md={24}>
                  <Link target='_blank' href={support.site}>
                    <Badge.Ribbon
                      text={support.is_actual ? 'Актуально' : 'Не актуально'}
                      color={support.is_actual ? 'blue' : 'red'}
                    >
                      <Card hoverable style={{ height: '100%' }}>
                        <Title level={5}>{support.title}</Title>
                        <Divider />
                        <Descriptions column={1}>
                          <Descriptions.Item label='Размер субсидий'>
                            {support?.amount ? (
                              <Tag>{support.amount}</Tag>
                            ) : (
                              '-'
                            )}
                          </Descriptions.Item>
                        </Descriptions>
                        <Text type='secondary'>{support.text}</Text>
                      </Card>
                    </Badge.Ribbon>
                  </Link>
                </Col>
              ))}
            </Row>
          )}
        />
      </PageWrapper>
    </Main>
  )
}

export default Supports
