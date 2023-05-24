import { Card, Col, Popover, Progress } from 'antd'
import React from 'react'

import type { FCC } from '@/types'

import styles from './CalculateProgress.module.scss'

interface CalculateProgressProps {
  percent: number
}

const strokeColor = { '0%': '#108ee9', '100%': '#87d068' }
const bodyStyle = { padding: 10 }
export const CalculateProgress: FCC<CalculateProgressProps> = ({ percent }) => {
  return percent ? (
    <Col className={styles.container}>
      <Popover
        title='Прогресс заполнения полей калькулятора.'
        content='Чем больше полей заполнено, тем более точным будет Ваш расчет'
      >
        <Card bodyStyle={bodyStyle}>
          <Progress
            type='circle'
            size='small'
            percent={percent}
            strokeColor={strokeColor}
          />
        </Card>
      </Popover>
    </Col>
  ) : null
}

CalculateProgress.displayName = 'CalculateProgress'

export default CalculateProgress
