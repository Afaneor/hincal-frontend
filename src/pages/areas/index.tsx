import { Card, Col, Descriptions, Row, Typography } from 'antd'
import Link from 'next/link'
import React from 'react'

import { FetchMoreItemsComponent } from '@/components/FetchMoreItemsComponent'
import { PageWrapper } from '@/components/PageWrapper'
import { Meta } from '@/layouts/Meta'
import type { AreaModelProps } from '@/models'
import { AreaModel } from '@/models'
import { Main } from '@/templates/Main'

const { Title, Text } = Typography

const Model = AreaModel
const defFilters = { limit: 12 }
const Areas = () => {
  return (
    <Main
      meta={
        <Meta
          title='Площадки'
          description='Площадки для осуществления деятельности'
        />
      }
    >
      <PageWrapper
        title='Площадки для осуществления деятельности'
        subTitle='Здесь собраны площадки для осуществления промышленной деятельности'
      >
        <FetchMoreItemsComponent
          model={Model}
          defFilters={defFilters}
          renderItems={(rowData) => (
            <Row gutter={[20, 20]} justify='center'>
              {rowData?.map((area: AreaModelProps) => (
                <Col key={area.id} xs={23} md={8}>
                  <Link target='_blank' href={area.site}>
                    <Card
                      hoverable
                      style={{ height: '100%' }}
                      cover={
                        <img
                          style={{ height: 170 }}
                          alt={area.title}
                          src={area.preview_image}
                        />
                      }
                    >
                      <Title level={5}>{area.title}</Title>

                      <Descriptions column={1}>
                        <Descriptions.Item label='Округ'>
                          {area.territorial_location.shot_name}
                        </Descriptions.Item>

                        <Descriptions.Item label='Адрес'>
                          {area.address}
                        </Descriptions.Item>
                      </Descriptions>
                      <Text>Помещения под аренду: </Text>
                      <Text type='secondary'>{area.text}</Text>
                    </Card>
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

export default Areas
