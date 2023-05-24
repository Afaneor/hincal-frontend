import { CloseCircleOutlined, DownloadOutlined } from '@ant-design/icons'
import { Button, Modal, Statistic } from 'antd'
import React from 'react'

import { useMoneyFormat } from '@/hooks/useMoneyFormat'
import type { FCC } from '@/types'

interface CalculatorPreviewProps {
  amountOfInvestment?: number
  open: boolean
  title: React.ReactNode
  onOk?: () => void
  onCancel?: () => void
}
export const CalculatorResults: FCC<CalculatorPreviewProps> = ({
  open,
  onCancel,
  onOk,
  title,
}) => {
  const moneyFormat = useMoneyFormat()

  return (
    <Modal
      title={title}
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
          Отмена
        </Button>,
        <Button
          key='submit'
          type='primary'
          size='large'
          icon={<DownloadOutlined />}
          onClick={() => ({})}
        >
          Скачать отчет
        </Button>,
      ]}
    >
      <Statistic
        title='Общая сумма инвестиций'
        value={moneyFormat(112893)}
        precision={2}
      />
    </Modal>
  )
}

CalculatorResults.displayName = 'CalculatorPreview'

export default CalculatorResults
