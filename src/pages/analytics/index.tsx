import { Card, Col, Row, Statistic, Typography } from 'antd'
import type { Gutter } from 'antd/es/grid/row'
import React from 'react'

import { PageWrapper } from '@/components/PageWrapper'
import { useMoneyFormat } from '@/hooks/useMoneyFormat'
import { Meta } from '@/layouts/Meta'
import type { StatisticsAllModelProps } from '@/models/StatisticsAll'
import { StatisticsAllModel } from '@/models/StatisticsAll'
import { useFetchItems } from '@/services/base/hooks'
import { Main } from '@/templates/Main'

const statMap = {
  average_investment_amount_bi:
    'Среднее количество инвестиций компаний по отраслям',
  average_investment_amount_math:
    'Среднее количество инвестиций на основе введенных данных',
  total_investment_amount_bi:
    'Общее количество инвестиций компаний по отраслям',
  total_investment_amount_math: 'Общее количество инвестиций на основе данных',
  number_of_reports: 'Количество отчетов',
  number_of_business: 'Количество бизнесов',
} as Record<string, any>

const { Title } = Typography

const paddingTop = { paddingTop: 20 }
const gutter = [20, 20] as Gutter | [Gutter, Gutter]
const valueStyle = { color: '#3f8600' }

const Model = StatisticsAllModel

const amountExcludeList = [
  'popular_sector',
  'number_of_reports',
  'number_of_business',
]
const numberIncludeList = ['number_of_reports', 'number_of_business']
const Analytics = () => {
  const { data, isLoading } = useFetchItems(Model)
  const moneyFormat = useMoneyFormat()

  const statistics: StatisticsAllModelProps = data?.data
  const amount =
    statistics &&
    Object.entries(statistics).filter(
      ([key]) => !amountExcludeList.includes(key)
    )

  const numbers =
    statistics &&
    Object.entries(statistics).filter(([key]) =>
      numberIncludeList.includes(key)
    )

  return (
    <Main
      meta={
        <Meta title='Аналитика' description='Аналитические данные по системе' />
      }
    >
      <PageWrapper title='' subTitle='' isLoading={isLoading}>
        <Row gutter={gutter} style={paddingTop}>
          <Col span={24}>
            <Title level={2}>Популярные отрасли на основе данных</Title>
          </Col>
          {statistics?.popular_sector.map((sec) => (
            <Col key={sec.sector_name} xs={24} md={6}>
              <Card bordered={false} style={{ height: 150 }}>
                <Statistic
                  title={sec.sector_name || 'Без названия'}
                  value={sec.count}
                  groupSeparator='xx'
                  valueStyle={valueStyle}
                />
              </Card>
            </Col>
          ))}
        </Row>
        <Row gutter={gutter} style={paddingTop}>
          <Col span={24}>
            <Title level={2}>Количество инвестиций</Title>
          </Col>
          {amount?.map(([key, val]) => (
            <Col key={key} xs={24} md={12}>
              <Card bordered={false} style={{ height: '100%' }}>
                <Statistic
                  title={statMap[key] || 'Без названия'}
                  value={moneyFormat(Math.round(val * 1000))}
                  valueStyle={valueStyle}
                />
              </Card>
            </Col>
          ))}
        </Row>
        <Row gutter={gutter} style={paddingTop}>
          <Col span={24}>
            <Title level={2}>Количество отчетов и бизнесов</Title>
          </Col>
          {numbers?.map(([key, val]) => (
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
