import { CloseCircleOutlined, FileDoneOutlined } from '@ant-design/icons'
import {
  Button,
  Col,
  Descriptions,
  Divider,
  Modal,
  Result,
  Row,
  Spin,
} from 'antd'
import React, { useMemo, useState } from 'react'

import { LoginOrRegisterToGetPersonInfo } from '@/components/LoginOrRegisterToGetPersonInfo'
import { SpecialForYou } from '@/components/SpecialForYou'
import { useFileDownload } from '@/hooks/useFileDownload'
import { useMoneyFormat } from '@/hooks/useMoneyFormat'
import { useQueryCache } from '@/hooks/useQueryCache'
import type { ResultCalculate, UsersModelProps } from '@/models'
import { CalculatorModel } from '@/models'
import type { FCC } from '@/types'

interface CalculatorPreviewProps {
  results: ResultCalculate
  amountOfInvestment?: number
  open: boolean
  title: React.ReactNode
  onOk?: () => void
  onCancel?: () => void
}

const Model = CalculatorModel
export const CalculatorResults: FCC<CalculatorPreviewProps> = ({
  open,
  onCancel,
  onOk,
  results,
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const moneyFormat = useMoneyFormat()
  const downloadFile = useFileDownload()
  const { data }: { data: UsersModelProps } | any = useQueryCache('getInfo')
  const handleDownloadFile = () => {
    setIsLoading(true)
    downloadFile({
      url: Model.getFileUrl(results.id),
      name: 'расчет_инвестиций_в_пром_предприятие.pdf',
    })
      .then(() => setIsLoading(false))
      .finally(() => setIsLoading(false))
  }
  const toMillion = (val: number) => val * 1000

  const showSpecialForYou = useMemo(
    () =>
      data &&
      (results.areas?.length ||
        results.offers?.length ||
        results?.supports?.length),
    [results]
  )

  return (
    <Modal
      centered
      open={open}
      onOk={onOk}
      width={1000}
      onCancel={onCancel}
      footer={[]}
    >
      <Spin spinning={isLoading} size='large'>
        <Result
          status='success'
          title={moneyFormat(
            toMillion(
              results?.context?.context_for_file?.all_possible_costs_math
            )
          )}
          subTitle='Общая сумма всех затрат'
        />
        {data ? (
          <Row justify='center' style={{ marginBottom: 20 }}>
            <Col>
              <Button
                key='submit'
                danger
                icon={<FileDoneOutlined />}
                onClick={handleDownloadFile}
              >
                Получить персонализированный отчет
              </Button>
            </Col>
          </Row>
        ) : null}
        <Divider />
        <Descriptions title='Затраты на основе введенных вами данных'>
          <Descriptions.Item span={1} label='Персонал'>
            {moneyFormat(
              toMillion(
                results?.context?.context_for_file?.all_staff_costs_math
              )
            )}
          </Descriptions.Item>
          <Descriptions.Item span={2} label='Земля, имущество и транспорт'>
            {moneyFormat(
              toMillion(
                results?.context?.context_for_file?.all_lp_tax_costs_math
              )
            )}
          </Descriptions.Item>
          <Descriptions.Item span={1} label='Оборудование'>
            {moneyFormat(
              toMillion(
                results?.context?.context_for_file?.equipment_costs_math
              )
            )}
          </Descriptions.Item>
          <Descriptions.Item span={2} label='Налог на прибыль'>
            {moneyFormat(
              toMillion(results?.context?.context_for_file?.avg_income_tax_math)
            )}
          </Descriptions.Item>
          <Descriptions.Item span={1} label='Сервисы'>
            {moneyFormat(
              toMillion(
                results?.context?.context_for_file?.all_services_costs_math
              )
            )}
          </Descriptions.Item>
          <Descriptions.Item span={2} label='Другие налоги'>
            {moneyFormat(
              toMillion(
                results?.context?.context_for_file?.avg_other_taxes_math
              )
            )}
          </Descriptions.Item>
        </Descriptions>
        <Divider />
        <Descriptions
          title={`В среднем тратят компании в выбранной отрасли ${moneyFormat(
            toMillion(results?.context?.context_for_file?.all_possible_costs_bi)
          )}`}
        >
          <Descriptions.Item span={1} label='Персонал'>
            {moneyFormat(
              toMillion(results?.context?.context_for_file?.all_staff_costs_bi)
            )}
          </Descriptions.Item>
          <Descriptions.Item span={2} label='Земля, имущество и транспорт'>
            {moneyFormat(
              toMillion(results?.context?.context_for_file?.all_lp_tax_costs_bi)
            )}
          </Descriptions.Item>
          <Descriptions.Item span={1} label='Оборудование'>
            {moneyFormat(
              toMillion(results?.context?.context_for_file?.equipment_costs_bi)
            )}
          </Descriptions.Item>
          <Descriptions.Item span={2} label='Налог на прибыль'>
            {moneyFormat(
              toMillion(results?.context?.context_for_file?.avg_income_tax_bi)
            )}
          </Descriptions.Item>
          <Descriptions.Item span={1} label='Сервисы'>
            {moneyFormat(
              toMillion(
                results?.context?.context_for_file?.all_services_costs_bi
              )
            )}
          </Descriptions.Item>
          <Descriptions.Item span={2} label='Другие налоги'>
            {moneyFormat(
              toMillion(results?.context?.context_for_file?.avg_other_taxes_bi)
            )}
          </Descriptions.Item>
        </Descriptions>
        {showSpecialForYou ? (
          <Row>
            <Col span={24}>
              <SpecialForYou
                areas={results.areas}
                offers={results.offers}
                supports={results.supports}
              />
            </Col>
          </Row>
        ) : null}
        {!data ? (
          <Row justify='center'>
            <Divider />
            <Col span={24}>
              <LoginOrRegisterToGetPersonInfo />
            </Col>
          </Row>
        ) : null}

        <Row justify='end'>
          <Divider />
          <Col>
            <Button
              key='back'
              size='large'
              icon={<CloseCircleOutlined />}
              onClick={onCancel}
            >
              Закрыть
            </Button>
          </Col>
        </Row>
      </Spin>
    </Modal>
  )
}

CalculatorResults.displayName = 'CalculatorResults'

export default CalculatorResults
