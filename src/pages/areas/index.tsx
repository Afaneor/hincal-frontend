import { Card, Col, Descriptions, Row, Typography } from 'antd'
import Link from 'next/link'
import type { BaseSyntheticEvent } from 'react'
import React from 'react'

import { FetchMoreItemsComponent } from '@/components/FetchMoreItemsComponent'
import { PageWrapper } from '@/components/PageWrapper'
import { SelectSearchableAsync } from '@/components/SelectSearchableAsync'
import { useFilter } from '@/hooks/useFilter'
import { Meta } from '@/layouts/Meta'
import type { AreaModelProps } from '@/models'
import { AreaModel, TerritorialLocationModel } from '@/models'
import { Main } from '@/templates/Main'

const { Title, Text } = Typography

export const AreaCard = ({
  title,
  preview_image,
  territorial_location,
  address,
  text,
  ...rest
}: any) => (
  <Card
    style={{ height: '100%' }}
    cover={<img style={{ height: 200 }} alt={title} src={preview_image} />}
    {...rest}
  >
    <Title level={5}>{title}</Title>

    <Descriptions column={1}>
      <Descriptions.Item label='Округ'>
        {territorial_location?.shot_name}
      </Descriptions.Item>

      <Descriptions.Item label='Адрес'>{address}</Descriptions.Item>
    </Descriptions>
    <Text>Помещения под аренду: </Text>
    <Text type='secondary'>{text}</Text>
  </Card>
)
const Model = AreaModel
const defFilters = { limit: 12 }

const filterStyle = { marginBottom: 10 }
const Areas = () => {
  const [filter, setFilter] = useFilter(defFilters)

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
        <Card style={filterStyle}>
          <Row>
            <Col xs={24} md={10}>
              <SelectSearchableAsync
                model={TerritorialLocationModel}
                placeholder='Выберите округ'
                listItemsNameKey='full_name'
                single
                onChange={(evt: BaseSyntheticEvent) => {
                  setFilter({ territorial_location: evt?.target?.value?.id })
                }}
              />
            </Col>
          </Row>
        </Card>
        <FetchMoreItemsComponent
          model={Model}
          defFilters={filter}
          renderItems={(rowData) => (
            <Row gutter={[20, 20]}>
              {rowData?.map((area: AreaModelProps) => (
                <Col key={area.id} xs={24} md={8}>
                  <Link target='_blank' href={area.site}>
                    <AreaCard
                      hoverable
                      title={area.title}
                      preview_image={area.preview_image}
                      territorial_location={area.territorial_location}
                      address={area.address}
                      text={area.text}
                    />
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
