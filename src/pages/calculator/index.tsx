import {
  AppstoreOutlined,
  CalculatorOutlined,
  GatewayOutlined,
  TeamOutlined,
  ToolOutlined,
  UserOutlined,
} from '@ant-design/icons'
import {
  Anchor,
  Button,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from 'antd'
import type { FieldData } from 'rc-field-form/lib/interface'
import React, { useState } from 'react'
import type { FCC } from 'src/types'

import { FormItem } from '@/components'
import { AnchorItemWrapper } from '@/components/AnchorItemWrapper'
import { CalcMap } from '@/components/CalcMap'
import { PageWrapper } from '@/components/PageWrapper'
import { Switcher } from '@/components/Switcher'
import type { FormErrorsHook } from '@/hooks/useFormErrors'
import { useFormErrors } from '@/hooks/useFormErrors'
import { CalculateProgress } from '@/pages/calculator/components/CalculateProgress'
import { CalculatorResults } from '@/pages/calculator/components/CalculatorResults'

const { Option } = Select

const anchorItems = [
  {
    key: 'location_area',
    href: '#location_area',
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

const staffFormItemStyle = {
  display: 'inline-block',
  width: 'calc(45% - 12px)',
}
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

  const onFinish = () => {
    //
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
              id='location_area'
              title='Выберите территорию расположения производства'
              size={75}
              bodyStyle={{ padding: 0 }}
            >
              <FormItem name='location_area' shouldUpdate>
                <CalcMap />
              </FormItem>
            </AnchorItemWrapper>
            <AnchorItemWrapper
              id='main-investment-params'
              title='Основные инвестиционные параметры'
              size={60}
              bodyStyle={{ height: '85%' }}
            >
              <FormItem
                label='Отрасль'
                tooltip='Отрасль ведения хозяйственной деятельности'
                name='sector'
                wrapperCol={{ span: 12 }}
                errors={errors.sector}
              >
                <Select size='large' allowClear>
                  <Option value='.com'>.com</Option>
                  <Option value='.jp'>.jp</Option>
                  <Option value='.cn'>.cn</Option>
                  <Option value='.org'>.org</Option>
                </Select>
              </FormItem>

              <FormItem
                label='Площадь земельного участка (кв.м.)'
                tooltip='Площадь земельного участка для расположения промышленного производства (в квадратных метрах)'
                name='land_area'
                wrapperCol={{ span: 12 }}
                errors={errors.land_area}
              >
                <InputNumber
                  placeholder='1000 кв.м.'
                  size='large'
                  addonBefore={<GatewayOutlined />}
                  addonAfter={
                    <span>
                      м<sup>2</sup>
                    </span>
                  }
                />
              </FormItem>
              <FormItem
                label='Площадь объектов (кв.м.)'
                tooltip='Площадь объектов капитального строительства (в квадратных метрах)'
                name='property_area'
                wrapperCol={{ span: 12 }}
                errors={errors.property_area}
              >
                <InputNumber
                  placeholder='1000 кв.м.'
                  size='large'
                  addonBefore={<AppstoreOutlined />}
                  addonAfter={
                    <span>
                      м<sup>2</sup>
                    </span>
                  }
                />
              </FormItem>
              <FormItem
                label='Штатная численность работников'
                wrapperCol={{ span: 12 }}
                errors={errors.staff}
              >
                <FormItem
                  help='минимальная'
                  name='from_staff'
                  style={staffFormItemStyle}
                  errors={errors.from_staff}
                >
                  <InputNumber
                    addonBefore={<UserOutlined />}
                    placeholder='1'
                    size='large'
                  />
                </FormItem>
                <span
                  style={{
                    display: 'inline-block',
                    width: '35px',
                    lineHeight: '32px',
                    textAlign: 'center',
                  }}
                >
                  -
                </span>
                <FormItem
                  name='to_staff'
                  help='максимальная'
                  style={staffFormItemStyle}
                  errors={errors.to_staff}
                >
                  <InputNumber
                    addonBefore={<TeamOutlined />}
                    placeholder='999'
                    size='large'
                  />
                </FormItem>
              </FormItem>
              <FormItem
                label='Оборудование'
                tooltip='Предполагаемое к использованию оборудование'
                name='equipment'
                wrapperCol={{ span: 12 }}
                errors={errors.equipment}
              >
                <Input
                  placeholder='name@example.ru'
                  size='large'
                  addonBefore={<ToolOutlined />}
                />
              </FormItem>
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
              <FormItem
                name='is_accounting'
                wrapperCol={{ span: 12 }}
                errors={errors.is_accounting}
              >
                <Switcher label='Предоставление бухгалтерских услуг' />
              </FormItem>
              <FormItem
                name='is_patent'
                wrapperCol={{ span: 12 }}
                errors={errors.is_patent}
              >
                <Switcher label='Оформление патента (только для индивидуальных предпринимателей)' />
              </FormItem>
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
