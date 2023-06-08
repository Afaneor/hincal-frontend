import { CloseCircleOutlined, DownloadOutlined } from '@ant-design/icons'
import {
  Button,
  Col,
  Descriptions,
  Modal,
  Result,
  Row,
  Space,
  Spin,
} from 'antd'
import React, { useState } from 'react'

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
            toMillion(results?.context?.context_for_file?.all_possible_costs_bi)
          )}
          subTitle='Общая сумма всех затрат'
        />
        <Descriptions title='Затраты на основе введенных вами данных'>
          <Descriptions.Item label='Персонал'>
            {moneyFormat(
              toMillion(
                results?.context?.context_for_file?.all_staff_costs_math
              )
            )}
          </Descriptions.Item>
          <Descriptions.Item label='Земля и имущество'>
            {moneyFormat(
              toMillion(
                results?.context?.context_for_file?.all_lp_lease_costs_math
              )
            )}
          </Descriptions.Item>
          <Descriptions.Item label='Оборудование'>
            {moneyFormat(
              toMillion(
                results?.context?.context_for_file?.equipment_costs_math
              )
            )}
          </Descriptions.Item>
          <Descriptions.Item label='Налоги'>
            {moneyFormat(
              toMillion(results?.context?.context_for_file?.all_tax_costs_math)
            )}
          </Descriptions.Item>
          <Descriptions.Item label='Сервисы'>
            {moneyFormat(
              toMillion(
                results?.context?.context_for_file?.all_services_costs_math
              )
            )}
          </Descriptions.Item>
        </Descriptions>
        <Descriptions title='В среднем тратят компании в выбранной отрасли'>
          <Descriptions.Item label='Персонал'>
            {moneyFormat(
              toMillion(results?.context?.context_for_file?.all_staff_costs_bi)
            )}
          </Descriptions.Item>
          <Descriptions.Item label='Земля и имущество'>
            {moneyFormat(
              toMillion(
                results?.context?.context_for_file?.all_lp_lease_costs_bi
              )
            )}
          </Descriptions.Item>
          <Descriptions.Item label='Оборудование'>
            {moneyFormat(
              toMillion(results?.context?.context_for_file?.equipment_costs_bi)
            )}
          </Descriptions.Item>
          <Descriptions.Item label='Налоги'>
            {moneyFormat(
              toMillion(results?.context?.context_for_file?.all_tax_costs_bi)
            )}
          </Descriptions.Item>
          <Descriptions.Item label='Сервисы'>
            {moneyFormat(
              toMillion(
                results?.context?.context_for_file?.all_services_costs_bi
              )
            )}
          </Descriptions.Item>
        </Descriptions>
        <Row gutter={[20, 20]} justify='end'>
          <Col>
            <Space wrap>
              <Button
                key='back'
                size='large'
                icon={<CloseCircleOutlined />}
                onClick={onCancel}
              >
                Закрыть
              </Button>
              {data ? (
                <Button
                  key='submit'
                  type='primary'
                  size='large'
                  icon={<DownloadOutlined />}
                  onClick={handleDownloadFile}
                >
                  Скачать персонализированный отчет
                </Button>
              ) : undefined}
            </Space>
          </Col>
        </Row>
      </Spin>
    </Modal>
  )
}

CalculatorResults.displayName = 'CalculatorPreview'

export default CalculatorResults
