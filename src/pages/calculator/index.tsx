import { CalculatorOutlined } from '@ant-design/icons'
import { Anchor, Button, Col, Form, Row } from 'antd'
import type { FieldData } from 'rc-field-form/lib/interface'
import React, { useState } from 'react'
import type { FCC } from 'src/types'

import AccountingFormItem from '@/components/AccountingFormItem/AccountingFormItem'
import { AnchorItemWrapper } from '@/components/AnchorItemWrapper'
import { CalculateProgress } from '@/components/CalculateProgress'
import { CalculatorResults } from '@/components/CalculatorResults'
import EquipmentFormItem from '@/components/EquipmentFormItem/EquipmentFormItem'
import { LandAreaFormItem } from '@/components/LandAreaFormItem'
import MapFormItem from '@/components/MapFormItem/MapFormItem'
import { PageWrapper } from '@/components/PageWrapper'
import PatentFormItem from '@/components/PatentFormItem/PatentFormItem'
import PropertyAreaFormItem from '@/components/PropertyAreaFormItem/PropertyAreaFormItem'
import SectorFormItem from '@/components/SectorFormItem/SectorFormItem'
import StaffFormItem from '@/components/StaffFormItem/StaffFormItem'
import type { FormErrorsHook } from '@/hooks/useFormErrors'
import { useFormErrors } from '@/hooks/useFormErrors'

const anchorItems = [
  {
    key: 'location-area',
    href: '#location-area',
    title: 'Территория расположения производства',
  },
  {
    key: 'main-investment-params',
    href: '#main-investment-params',
    title: 'Основные инвестиционные требования',
  },
  {
    key: 'advanced-investment-params',
    href: '#advanced-investment-params',
    title: 'Дополнительные инвестиционные требования',
  },
]

const AnchorCalc = () => <Anchor offsetTop={65} items={anchorItems} />
const Calculator: FCC = () => {
  const [form] = Form.useForm()
  const { errors } = useFormErrors() as FormErrorsHook
  const [ipOpen, setIpOpen] = useState(false)
  const [percent, setPercent] = useState(0)
  const getPercent = (_: FieldData[], all: FieldData[]) => {
    const count = all.filter((f) => f.touched && f.value)?.length
    const weightProp = 100 / (all?.length || 0)
    const percents = count * weightProp
    return setPercent(Math.round(percents))
  }

  const onFinish = (vals: any) => {
    console.log(vals)
    setIpOpen(true)
  }
  const onFinishFailed = () => {
    //
  }

  return (
    <PageWrapper
      title='Калькулятор инвестиций в развитие промышленного предприятия'
      subTitle='Инструмент позволит быстро и качественно рассчитать объем
                требуемых вложений'
    >
      <Row gutter={[20, 20]}>
        <Col xs={24} md={20}>
          <Form
            form={form}
            name='calculator'
            labelCol={{ span: 10 }}
            labelAlign='left'
            initialValues={{}}
            autoComplete='off'
            onFieldsChange={getPercent}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <AnchorItemWrapper
              id='location-area'
              title='Выберите территорию расположения производства'
              size={75}
              bodyStyle={{ padding: 0 }}
            >
              <MapFormItem errors={errors.location_area} />
            </AnchorItemWrapper>
            <AnchorItemWrapper
              id='main-investment-params'
              title='Основные инвестиционные параметры'
              size={60}
              bodyStyle={{ height: '85%' }}
            >
              <SectorFormItem errors={errors.sector} />
              <LandAreaFormItem errors={errors.land_area} />
              <PropertyAreaFormItem errors={errors.property_area} />
              <StaffFormItem errors={errors.staff} />
              <EquipmentFormItem errors={errors.equipment} />
            </AnchorItemWrapper>

            <AnchorItemWrapper
              id='advanced-investment-params'
              title='Дополнительные инвестиционные требования'
              size={50}
              actions={[
                <Button
                  size='large'
                  key='SubmitBtn'
                  type='primary'
                  htmlType='submit'
                  icon={<CalculatorOutlined />}
                  shape='round'
                >
                  Рассчитать
                </Button>,
              ]}
            >
              <AccountingFormItem errors={errors.is_accounting} />
              <PatentFormItem errors={errors.is_patent} />
            </AnchorItemWrapper>
          </Form>
        </Col>
        <Col xs={0} md={4}>
          <AnchorCalc />
        </Col>
        <CalculateProgress percent={percent} />
        <CalculatorResults
          title={
            <h3>
              Результат расчета необходимых инвестиция в развитие промышленного
              предприятия
            </h3>
          }
          open={ipOpen}
          onCancel={() => setIpOpen(false)}
        />
      </Row>
    </PageWrapper>
  )
}

Calculator.displayName = 'Calculator'

export default Calculator
