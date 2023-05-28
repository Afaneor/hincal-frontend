import { ArrowUpOutlined } from '@ant-design/icons'
import { Card, Col, Row, Statistic, Typography } from 'antd'
import type { Gutter } from 'antd/es/grid/row'
import React from 'react'

import { PageWrapper } from '@/components/PageWrapper'
import { Meta } from '@/layouts/Meta'
import type { StatisticsAllModelProps } from '@/models/StatisticsAll'
import { StatisticsAllModel } from '@/models/StatisticsAll'
import { useFetchItems } from '@/services/base/hooks'
import { Main } from '@/templates/Main'

const statMap = {
  average_investment_amount_bi: 'Среднее количество инвестиций',
  average_investment_amount_math:
    'Среднее количество инвестиций рассчитанное по математике',
  total_investment_amount_bi: 'Общее количество инвестиций',
  total_investment_amount_math:
    'Общее количество инвестиций рассчитанное по математике',
  number_of_reports: 'Количество отчетов',
  number_of_business: 'Количество бизнесов',
} as Record<string, any>

const { Title } = Typography

const paddingTop = { paddingTop: 20 }
const gutter = [20, 20] as Gutter | [Gutter, Gutter]
const valueStyle = { color: '#3f8600' }

const Model = StatisticsAllModel

const Analytics = () => {
  const { data } = useFetchItems(Model)
  const statistics: StatisticsAllModelProps = data?.data
  const amount = Object.entries(statistics).filter(
    ([key]) => key !== 'popular_sector'
  )
  console.log(amount)
  return (
    <Main
      meta={
        <Meta
          title='Площадки'
          description='Площадки для осуществления деятельности'
        />
      }
    >
      <PageWrapper title='' subTitle=''>
        <Row gutter={gutter} style={paddingTop}>
          <Col span={24}>
            <Title level={2}>Популярные отрасли</Title>
          </Col>
          {statistics.popular_sector.map((sec) => (
            <Col key={sec.sector_name} xs={24} md={6}>
              <Card bordered={false} style={{ height: 100 }}>
                <Statistic
                  title={sec.sector_name || 'Без названия'}
                  value={sec.count}
                  groupSeparator='xx'
                  valueStyle={valueStyle}
                  prefix={<ArrowUpOutlined />}
                />
              </Card>
            </Col>
          ))}
        </Row>
        <Row gutter={gutter} style={paddingTop}>
          <Col span={24}>
            <Title level={2}>Количественные показатели</Title>
          </Col>
          {amount.map(([key, val]) => (
            <Col key={key} xs={24} md={8}>
              <Card bordered={false} style={{ height: '100%' }}>
                <Statistic
                  title={statMap[key] || 'Без названия'}
                  value={Math.round(val)}
                  valueStyle={valueStyle}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </PageWrapper>
    </Main>
  )
}

export default Analytics
