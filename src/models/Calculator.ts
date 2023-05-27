import type { HoveInfoProps } from '@/components/CalcMap/types'
import type { BaseModelProps } from '@/models/Base'
import type { EquipmentModelProps } from '@/models/Equipment'
import type { SectorModelProps } from '@/models/Sector'

import type { UsersModelProps } from './Users'

export class CalculatorModel {
  static modelName = 'calculator'

  static url() {
    return '/hincal/reports/calculator'
  }
}

export interface CalculatorModelProps extends BaseModelProps {
  type_business: string
  sectors: SectorModelProps[]
  sub_sectors: SectorModelProps[]
  from_staff: number
  to_staff: number
  territorial_locations: HoveInfoProps[]
  from_land_area: number
  to_land_area: number
  from_property_area: number
  to_property_area: number
  equipments: EquipmentModelProps[]
  type_tax_system: string
  need_accounting: boolean
  need_registration: boolean
  other: any
}

export interface ResultCalculate extends BaseModelProps {
  user: UsersModelProps
  initial_data: CalculatorModelProps
  context: ResultCalculateContext
}

export interface ResultCalculateContext {
  create_date: string
  business: Record<string, any>
  initial_data: CalculatorModelProps
  chat_gpt_page_2: string
  chat_gpt_page_3: string
  chat_gpt_page_4: string
  chat_gpt_page_5: string
  chat_gpt_page_6: string
  chat_gpt_page_7: string
  chat_gpt_page_8: string
  avg_number_of_staff_by_business_indicators: number
  avg_salary_of_staff_by_business_indicators: number
  avg_taxes_to_the_budget_by_business_indicators: number
  avg_income_tax_by_business_indicators: number
  avg_property_tax_by_business_indicators: number
  avg_land_tax_by_business_indicators: number
  avg_personal_income_tax_by_business_indicators: number
  avg_transport_tax_by_business_indicators: number
  avg_other_taxes_by_business_indicators: number
  avg_number_of_staff_math: number
  avg_salary_of_staff_math: number
  all_salary: number
  avg_personal_income_tax_math: number
  avg_land_area_math: number
  avg_land_cadastral_value_math: number
  avg_land_tax_math: number
  avg_property_area_math: number
  avg_property_cadastral_value_math: number
  avg_property_tax_math: number
  avg_patent_tax_math: number
  equipment_costs: number
  accounting_costs: number
  registration_costs: number
  archive: ResultCalculateContextArchive
  avg_staff_tax_costs: number
  avg_staff_pension_contributions_costs: number
  avg_staff_medical_contributions_costs: number
  all_possible_costs: number
  all_staff_costs: number
}

export interface ResultCalculateContextArchive {
  year: number
  income_tax_rate_to_the_subject_budget: number
  income_tax_rate_to_the_federal_budget: number
  land_tax_rate: number
  property_tax_rate: number
  patent_tax_rate: number
  personal_income_rate: number
  pension_contributions_rate: number
  medical_contributions_rate: number
  lower_tax_margin_error: number
  upper_tax_margin_error: number
  cost_accounting: CostAccounting
  registration_costs: {
    legal: number
    individual: number
  }
}

export interface CostAccounting {
  legal: CostAccountingLegal
  individual: CostAccountingIndividual
}

export interface CostAccountingLegal {
  osn: Cost
  ysn: Cost
  patent: Cost
}

export interface CostAccountingIndividual {
  osn: Cost
  ysn: Cost
  patent: Cost
}

export interface Cost {
  lower: number
  upper: number
}
