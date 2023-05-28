import { CalculatorOutlined } from '@ant-design/icons'
import { Anchor, Button, Col, Form, Row } from 'antd'
import React, { useMemo, useState } from 'react'
import type { FCC } from 'src/types'

import AccountingFormItem from '@/components/AccountingFormItem/AccountingFormItem'
import { AnchorItemWrapper } from '@/components/AnchorItemWrapper'
import type { HoveInfoProps } from '@/components/CalcMap/types'
import { CalculatorPageWrapper } from '@/components/CalculatorPageWrapper'
import { CalculatorResults } from '@/components/CalculatorResults'
import EquipmentFormItem from '@/components/EquipmentFormItem/EquipmentFormItem'
import { LandAreaFormItem } from '@/components/LandAreaFormItem'
import MapFormItem from '@/components/MapFormItem/MapFormItem'
import { OtherFieldFormListItems } from '@/components/OtherFieldFormListItems'
import PatentFormItem from '@/components/PatentFormItem/PatentFormItem'
import { PropertyTypeFormItem } from '@/components/PropertyTypeFormItem'
import SectorFormItem from '@/components/SectorFormItem/SectorFormItem'
import StaffFormItem from '@/components/StaffFormItem/StaffFormItem'
import { TypeBusinessFormItem } from '@/components/TypeBusinessFormItem'
import { TypeTaxSystemFormItem } from '@/components/TypeTaxSystemFormItem'
import type { FormErrorsHook } from '@/hooks/useFormErrors'
import { useFormErrors } from '@/hooks/useFormErrors'
import { Meta } from '@/layouts/Meta'
import type {
  CalculatorModelProps,
  PropertyOtherTypeProps,
} from '@/models/Calculator'
import { CalculatorModel } from '@/models/Calculator'
import type { ReportModelProps } from '@/models/Report'
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

const CalcModel = CalculatorModel

const Calculator: FCC = () => {
  const [form] = Form.useForm()
  const typeBusiness = Form.useWatch('type_business', form)

  const { errors, setFormErrors } = useFormErrors() as FormErrorsHook
  const [ipOpen, setIpOpen] = useState(false)
  const [report, setReport] = useState({} as ReportModelProps)
  useChoices(CalcModel.modelName, CalcModel.url())

  const prepareNewReportField = (terLoc: HoveInfoProps[]) => {
    return terLoc?.map(
      (tl: HoveInfoProps) => tl.feature.properties.territorialLocation?.id
    )
  }
  const { mutate: calculate } = useCreateItem(CalcModel)

  const prepareEmptyFields = (fields?: PropertyOtherTypeProps[]) => {
    if (fields?.length) {
      return fields.filter((type: PropertyOtherTypeProps) => {
        return type.name && type.cost && type
      })
    }
    return undefined
  }
  const handleCalculate = (newReport: CalculatorModelProps) => {
    calculate(
      {
        ...newReport,
        territorial_locations: prepareNewReportField(
          newReport?.territorial_locations
        ),
        sector: newReport?.sector?.id,
        equipments: newReport?.equipments?.map((eq) => eq.id),
        properties: prepareEmptyFields(newReport?.properties),
        others: prepareEmptyFields(newReport?.others),
      },
      {
        onSuccess: (data: any) => {
          setReport(data)
        },
        onError: (error: any) => {
          setFormErrors(error.response.data)
        },
      }
    )
  }

  const onFinishFailed = () => {
    //
  }

  const showPatent = useMemo(
    () => typeBusiness && typeBusiness === 'individual',
    [typeBusiness]
  )

  const handleOnCreatePolygon = (selectedPolygonsInMeters: number) => {
    form.setFieldsValue({
      from_land_area: selectedPolygonsInMeters,
      to_land_area: selectedPolygonsInMeters,
    })
  }

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
      <CalculatorPageWrapper
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
              onFinish={handleCalculate}
              onFinishFailed={onFinishFailed}
            >
              <AnchorItemWrapper
                id='location-area'
                title='Выберите территорию расположения производства'
                size={75}
                bodyStyle={{ padding: 0 }}
              >
                <MapFormItem
                  errors={errors.territorial_locations}
                  onCreatePolygone={handleOnCreatePolygon}
                />
              </AnchorItemWrapper>
              <AnchorItemWrapper
                id='main-investment-params'
                title='Основные инвестиционные параметры'
                size={60}
                bodyStyle={{ height: '85%' }}
              >
                <TypeBusinessFormItem errors={errors.type_business} />
                <TypeTaxSystemFormItem errors={errors.type_tax_system} />
                <SectorFormItem errors={errors.sector} />
                <LandAreaFormItem errors={errors.land_area} />
                <StaffFormItem
                  errorsFromStaff={errors.from_staff}
                  errorsToStaff={errors.to_staff}
                />
                <EquipmentFormItem errors={errors.equipment} />
                <PropertyTypeFormItem />
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
                <OtherFieldFormListItems />
              </AnchorItemWrapper>
            </Form>
          </Col>
          <Col xs={0} md={4}>
            <AnchorCalc />
          </Col>
        </Row>
      </CalculatorPageWrapper>
    </Main>
  )
}

Calculator.displayName = 'Calculator'

export default Calculator
