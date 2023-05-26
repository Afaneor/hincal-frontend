import { CalculatorOutlined } from '@ant-design/icons'
import { Anchor, Button, Col, Form, Row } from 'antd'
import type { FieldData } from 'rc-field-form/lib/interface'
import React, { useCallback, useMemo, useState } from 'react'
import type { FCC } from 'src/types'

import AccountingFormItem from '@/components/AccountingFormItem/AccountingFormItem'
import { AnchorItemWrapper } from '@/components/AnchorItemWrapper'
import type { HoveInfoProps } from '@/components/CalcMap/types'
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
import { TypeBusinessFormItem } from '@/components/TypeBusinessFormItem'
import { TypeTaxSystemFormItem } from '@/components/TypeTaxSystemFormItem'
import type { FormErrorsHook } from '@/hooks/useFormErrors'
import { useFormErrors } from '@/hooks/useFormErrors'
import { Meta } from '@/layouts/Meta'
import type { CalculatorModelProps } from '@/models/Calculator'
import { CalculatorModel } from '@/models/Calculator'
import type { ReportModelProps } from '@/models/Report'
import { ReportModel } from '@/models/Report'
import { useChoices, useCreateItem } from '@/services/base/hooks'
import { Main } from '@/templates/Main'

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

const Model = ReportModel
const CalcModel = CalculatorModel

const Calculator: FCC = () => {
  const [form] = Form.useForm()
  const typeBusiness = Form.useWatch('type_business', form)

  const { errors } = useFormErrors() as FormErrorsHook
  const [ipOpen, setIpOpen] = useState(false)
  const [percent, setPercent] = useState(0)
  const [report, setReport] = useState({} as ReportModelProps)
  const { mutate: createReport } = useCreateItem(Model)
  useChoices(CalcModel.modelName, CalcModel.url())

  const prepareNewReportField = (terLoc: HoveInfoProps[]) => {
    return terLoc?.map(
      (tl: HoveInfoProps) => tl.feature.properties.territorialLocation?.id
    )
  }
  const handleCreateReport = (newReport: CalculatorModelProps) => {
    createReport(
      {
        ...newReport,
        territorial_locations: prepareNewReportField(
          newReport?.territorial_locations
        ),
        sectors: newReport?.sectors?.map((s) => s.id),
        equipments: newReport?.equipments?.map((eq) => eq.id),
      },
      {
        onSuccess: (data: any) => {
          setReport(data)
        },
        onError: () => {
          //
        },
      }
    )
  }
  const getPercent = useCallback((_: FieldData[], all: FieldData[]) => {
    const count = all.filter((f) => {
      const val = Array.isArray(f.value) ? f.value.length : f.value
      return f.touched && val
    })?.length
    const weightProp = 100 / (all?.length || 0)
    const percents = count * weightProp
    return setPercent(Math.round(percents))
  }, [])

  const onFinishFailed = () => {
    //
  }

  const showTaxSystem = useMemo(
    () => typeBusiness && typeBusiness !== 'legal',
    [typeBusiness]
  )
  const showPatent = useMemo(
    () => typeBusiness && typeBusiness === 'individual',
    [typeBusiness]
  )

  return (
    <Main
      meta={
        <Meta
          title='Калькулятор'
          description='Калькулятор инвестиций в развитие промышленного предприятия'
        />
      }
    >
      <CalculatorResults
        result={report}
        title={
          <h3>
            Результат расчета необходимых инвестиция в развитие промышленного
            предприятия
          </h3>
        }
        open={ipOpen}
        onCancel={() => setIpOpen(false)}
      />
      <PageWrapper
        title='Калькулятор инвестиций в развитие промышленного предприятия'
        subTitle='Инструмент позволит быстро и качественно рассчитать объем
                требуемых вложений'
      >
        <Row gutter={[20, 20]} justify='end'>
          <Col xs={24} md={18}>
            <Form
              form={form}
              name='calculator'
              labelCol={{ span: 10 }}
              labelAlign='left'
              initialValues={{}}
              autoComplete='off'
              onFieldsChange={getPercent}
              onFinish={handleCreateReport}
              onFinishFailed={onFinishFailed}
            >
              <AnchorItemWrapper
                id='location-area'
                title='Выберите территорию расположения производства'
                size={75}
                bodyStyle={{ padding: 0 }}
              >
                <MapFormItem errors={errors.territorial_locations} />
              </AnchorItemWrapper>
              <AnchorItemWrapper
                id='main-investment-params'
                title='Основные инвестиционные параметры'
                size={60}
                bodyStyle={{ height: '85%' }}
              >
                <TypeBusinessFormItem errors={errors.business_type} />
                {showTaxSystem ? (
                  <TypeTaxSystemFormItem errors={errors.type_tax_system} />
                ) : null}
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
                <PatentFormItem
                  isDisabled={!showPatent}
                  errors={errors.is_patent}
                />
              </AnchorItemWrapper>
            </Form>
          </Col>
          <Col xs={0} md={4}>
            <AnchorCalc />
          </Col>
          <CalculateProgress percent={percent} />
        </Row>
      </PageWrapper>
    </Main>
  )
}

Calculator.displayName = 'Calculator'

export default Calculator
