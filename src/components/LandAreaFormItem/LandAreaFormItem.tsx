import { GatewayOutlined, InfoCircleOutlined } from '@ant-design/icons'
import { InputNumber, Popover, Typography } from 'antd'
import React from 'react'

import type { PropsFormItem } from '@/components'
import { FormItem } from '@/components'
import FormItemDash from '@/components/FormItemDash/FormItemDash'
import type { FCC } from '@/types'

import styles from './LandAreaFormItem.module.scss'

const { Text } = Typography

const itemStyle = {
  display: 'inline-block',
  width: 'calc(39% - 11px)',
}
const btnStyle = { display: 'inline-block', width: 'calc(4%)', marginLeft: 4 }

const popoverContent = (
  <div>
    <div className={styles.rowPolygon}>
      Перейдя на карту и выбрав инструмент Полигон
      <div className={styles.polygone} />,
    </div>
    <p>вы можете нарисовать желаемую площадь земельного участка.</p>
    <Text type='secondary'>Значение будет установлено автоматически</Text>
  </div>
)

const LandAreaFormItem: FCC<PropsFormItem> = ({ errors }) => {
  return (
    <FormItem
      label='Площадь земельного участка (кв.м.)'
      tooltip='Площадь земельного участка для расположения промышленного производства (в квадратных метрах)'
      wrapperCol={{ span: 18 }}
      errors={errors}
    >
      <FormItem style={btnStyle}>
        <Popover
          placement='top'
          title='Вы можете посчитать площадь на карте'
          trigger='hover'
          content={popoverContent}
        >
          <InfoCircleOutlined />
        </Popover>
      </FormItem>
      <FormItem
        help='от'
        name='from_land_area'
        style={itemStyle}
        errors={errors}
      >
        <InputNumber
          placeholder='10'
          size='large'
          addonBefore={<GatewayOutlined />}
          addonAfter={
            <span>
              м<sup>2</sup>
            </span>
          }
        />
      </FormItem>
      <FormItemDash />
      <FormItem help='до' name='to_land_area' style={itemStyle} errors={errors}>
        <InputNumber
          placeholder='1000'
          size='large'
          addonBefore={<GatewayOutlined />}
          addonAfter={
            <span>
              м<sup>2</sup>
            </span>
          }
        />
      </FormItem>
    </FormItem>
  )
}

LandAreaFormItem.displayName = 'LandAreaFormItem'

export default LandAreaFormItem
