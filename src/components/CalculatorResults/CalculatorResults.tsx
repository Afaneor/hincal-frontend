import { CloseCircleOutlined, DownloadOutlined } from '@ant-design/icons'
import { Button, Descriptions, Modal, Result } from 'antd'
import React from 'react'

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
  const moneyFormat = useMoneyFormat()
  const downloadFile = useFileDownload()
  const { data }: { data: UsersModelProps } | any = useQueryCache('getInfo')
  const handleDownloadFile = () => {
    downloadFile({
      url: Model.getFileUrl(results.id),
      name: results?.context?.create_date,
    })
  }
  const toMillion = (val: number) => val * 1000
  return (
    <Modal
      centered
      open={open}
      onOk={onOk}
      width={1000}
      onCancel={onCancel}
      footer={[
        <Button
          key='back'
          size='large'
          icon={<CloseCircleOutlined />}
          onClick={onCancel}
        >
          Закрыть
        </Button>,
        data ? (
          <Button
            key='submit'
            type='primary'
            size='large'
            icon={<DownloadOutlined />}
            onClick={handleDownloadFile}
          >
            Скачать персонализированный отчет
          </Button>
        ) : undefined,
      ]}
    >
      <Result
        status='success'
        title={moneyFormat(
          toMillion(results?.context?.context_for_file?.all_possible_costs_bi)
        )}
        subTitle='Общая сумма всех затрат'
      />
      <Descriptions title='Затраты'>
        <Descriptions.Item label='Персонал'>
          {moneyFormat(
            toMillion(results?.context?.context_for_file?.all_staff_costs_bi)
          )}
        </Descriptions.Item>
        <Descriptions.Item label='Земля и имущество'>
          {moneyFormat(
            toMillion(results?.context?.context_for_file?.all_lp_lease_costs_bi)
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
            toMillion(results?.context?.context_for_file?.all_services_costs_bi)
          )}
        </Descriptions.Item>
      </Descriptions>
    </Modal>
  )
}

CalculatorResults.displayName = 'CalculatorPreview'

export default CalculatorResults
