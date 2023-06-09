import { Button, Card, Col, Descriptions, Row } from 'antd'
import type { Gutter } from 'antd/es/grid/row'
import React, { useContext, useState } from 'react'

import { CalculatorResults } from '@/components/CalculatorResults'
import { CurrentUserContext } from '@/components/CurrentUserProvider/CurrentUserProvider'
import { FetchMoreItemsComponent } from '@/components/FetchMoreItemsComponent'
import { PageWrapper } from '@/components/PageWrapper'
import { useDateTimePrettyStr } from '@/hooks/useDateTimePrettyStr'
import { useMoneyFormat } from '@/hooks/useMoneyFormat'
import { Meta } from '@/layouts/Meta'
import type { ResultCalculate } from '@/models'
import { ReportModel } from '@/models'
import { Main } from '@/templates/Main'

const gutter = [20, 20] as Gutter | [Gutter, Gutter]

const Model = ReportModel

const Analytics = () => {
  const { currentUser } = useContext(CurrentUserContext)

  const [reportResults, setReportResults] = useState<ResultCalculate>(
    {} as ResultCalculate
  )
  const [isOpen, setIsOpen] = useState(false)

  const { dateFormatter } = useDateTimePrettyStr()
  const moneyFormat = useMoneyFormat()
  const toMillion = (val: number) => val * 1000

  const handleOpenResultsModal = (report: ResultCalculate) => {
    setReportResults(report)
    setIsOpen(true)
  }
  return (
    <Main
      meta={
        <Meta
          title='Мои расчеты'
          description='Мои расчеты инвестиций в развитие промышленного предприятия'
        />
      }
    >
      <CalculatorResults
        open={isOpen}
        results={reportResults}
        title={
          <h3>
            Результат расчета необходимых инвестиция в развитие промышленного
            предприятия
          </h3>
        }
        onCancel={() => setIsOpen(false)}
      />
      <PageWrapper title='Мои расчеты' subTitle=''>
        <FetchMoreItemsComponent
          model={Model}
          defFilters={{ user: currentUser?.id }}
          options={{ enabled: !!currentUser?.id }}
          renderItems={(rowData) => (
            <Row gutter={gutter}>
              {rowData.map((report: ResultCalculate) => (
                <Col key={report.id} span={24}>
                  <Card
                    title={`${
                      report.initial_data?.sector || 'Без отрасли'
                    } от ${dateFormatter({
                      date: report?.created_at,
                    })}`}
                    hoverable
                    extra={
                      <Button
                        type='link'
                        onClick={() => handleOpenResultsModal(report)}
                      >
                        Подробно
                      </Button>
                    }
                    onClick={() => handleOpenResultsModal(report)}
                  >
                    <Descriptions>
                      <Descriptions.Item label='Общая сумма всех затрат'>
                        {moneyFormat(
                          toMillion(
                            report?.context?.context_for_file
                              ?.all_possible_costs_math
                          )
                        )}
                      </Descriptions.Item>
                    </Descriptions>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        />
      </PageWrapper>
    </Main>
  )
}

export default Analytics
