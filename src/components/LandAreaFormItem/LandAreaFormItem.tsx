import { GatewayOutlined, InfoCircleOutlined } from '@ant-design/icons'
import { Col, InputNumber, Popover, Row, Typography } from 'antd'
import React from 'react'

import type { PropsFormItem } from '@/components'
import { FormItem } from '@/components'
import type { FormError } from '@/hooks/useFormErrors'
import type { FCC } from '@/types'

import styles from './LandAreaFormItem.module.scss'

const { Text } = Typography

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

interface SLandAreaFormItemProps extends PropsFormItem {
  errorsFromLandArea?: FormError
  errorsToLandArea?: FormError
}

const LandAreaFormItem: FCC<SLandAreaFormItemProps> = ({
  errors,
  errorsFromLandArea,
  errorsToLandArea,
}) => {
  return (
    <FormItem
      label='Площадь земельного участка (кв.м.)'
      tooltip='Площадь земельного участка для расположения промышленного производства (в квадратных метрах)'
      wrapperCol={{ span: 12 }}
      errors={errors}
    >
      <Row gutter={20}>
        <Col xs={24} md={10}>
          <FormItem
            help='от'
            name='from_land_area'
            errors={errorsFromLandArea}
            rules={[
              ({ getFieldValue, setFieldValue }) => ({
                validator(_, value) {
                  const toLAndArea = getFieldValue('to_land_area')
                  if (value > toLAndArea) {
                    setFieldValue('to_land_area', value)
                  }
                  return Promise.resolve()
                },
              }),
            ]}
          >
            <InputNumber
              placeholder='10'
              size='large'
              min={0}
              className='w100'
              addonBefore={<GatewayOutlined />}
              addonAfter={
                <span>
                  м<sup>2</sup>
                </span>
              }
            />
          </FormItem>
        </Col>
        <Col md={1} xs={0}>
          -
        </Col>
        <Col md={11} xs={22}>
          <FormItem
            help='до'
            name='to_land_area'
            errors={errorsToLandArea}
            rules={[
              ({ getFieldValue, setFieldValue }) => ({
                validator(_, value) {
                  const fromLandArea = getFieldValue('from_land_area')
                  if (value < fromLandArea) {
                    setFieldValue('to_land_area', fromLandArea)
                  }
                  return Promise.resolve()
                },
              }),
            ]}
          >
            <InputNumber
              placeholder='1000'
              size='large'
              className='w100'
              addonBefore={<GatewayOutlined />}
              addonAfter={
                <span>
                  м<sup>2</sup>
                </span>
              }
            />
          </FormItem>
        </Col>
        <Col xs={1} md={1}>
          <FormItem>
            <Popover
              placement='top'
              title='Вы можете посчитать площадь на карте'
              trigger='hover'
              content={popoverContent}
            >
              <InfoCircleOutlined />
            </Popover>
          </FormItem>
        </Col>
      </Row>
    </FormItem>
  )
}

LandAreaFormItem.displayName = 'LandAreaFormItem'

export default LandAreaFormItem
