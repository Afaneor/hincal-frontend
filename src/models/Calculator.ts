import type { HoveInfoProps } from '@/components/CalcMap/types'
import type { AreaModelProps } from '@/models/Area'
import type { BaseModelProps } from '@/models/Base'
import type { EquipmentModelProps } from '@/models/Equipment'
import type { OfferModelProps } from '@/models/Offer'
import type { SectorModelProps } from '@/models/Sector'
import type { SupportModelProps } from '@/models/Support'

import type { UsersModelProps } from './Users'

export class CalculatorModel {
  static modelName = 'calculator'

  static url() {
    return '/hincal/reports/calculator'
  }

  static getFileUrl(id: number | string) {
    return `/hincal/reports/${id}/get-file/`
  }
}

export interface PropertyOtherTypeProps {
  name: string
  cost: number
}
export interface CalculatorModelProps extends BaseModelProps {
  type_business: string
  sector: SectorModelProps
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
  others: PropertyOtherTypeProps[]
  properties: PropertyOtherTypeProps[]
}

export interface ResultCalculate extends BaseModelProps {
  user: UsersModelProps
  initial_data: CalculatorModelProps
  context: ResultCalculateContext
  areas: AreaModelProps[]
  supports: SupportModelProps[]
  offers: OfferModelProps[]
  tags: string[]
}

export interface ResultCalculateContext {
  create_date: string
  business: Record<any, any>
  initial_data: CalculatorModelProps
  archive: ResultCalculateContextArchive
  avg_number_of_staff_bi: number
  avg_salary_of_staff_bi: number
  avg_taxes_to_the_budget_bi: number
  avg_income_tax_bi: number
  avg_property_tax_bi: number
  avg_land_tax_bi: number
  avg_personal_income_tax_bi: number
  avg_transport_tax_bi: number
  avg_other_taxes_bi: number
  avg_number_of_staff_math: number
  avg_salary_of_staff_math: number
  all_salary: number
  avg_personal_income_tax_math: number
  avg_land_area_math: number
  avg_land_cadastral_value_math: number
  avg_land_tax_math: number
  property_area_math: number
  avg_property_cadastral_value_math: number
  avg_property_tax_math: number
  avg_capital_construction_costs_math: number
  type_capital_construction: string
  avg_patent_tax_math: number
  avg_possible_income_math: number
  equipment_costs: number
  data_by_equipments_costs: string
  accounting_costs: number
  registration_costs: number
  others_costs: number
  others_costs_str: string
  avg_staff_pension_contributions_costs_bi: number
  avg_staff_medical_contributions_costs_bi: number
  avg_staff_disability_contributions_costs_bi: number
  all_possible_costs_bi: number
  all_staff_costs_bi: number
  all_lp_lease_costs_bi: number
  all_tax_costs_bi: number
  all_services_costs_bi: number
  avg_staff_pension_contributions_costs_math: number
  avg_staff_medical_contributions_costs_math: number
  avg_staff_disability_contributions_costs_math: number
  avg_income_tax_math: number
  all_possible_costs_math: number
  all_staff_costs_math: number
  all_lp_lease_costs_math: number
  all_tax_costs_math: number
  all_services_costs_math: number
  avg_property_lease_value: number
  avg_property_purchase_value: number
  avg_land_lease_value: number
  avg_land_purchase_value: number
  avg_property_lease_costs: number
  avg_property_purchase_costs: number
  avg_land_lease_costs: number
  avg_land_purchase_costs: number
  context_for_file: ContextForFile
  all_lp_tax_costs_bi: number
  all_lp_tax_costs_math: number
}

export interface ResultCalculateContextArchive {
  year: number
  income_tax_rate_to_the_subject_budget: number
  income_tax_rate_to_the_federal_budget: number
  land_tax_rate: number
  property_tax_rate: number
  patent_tax_rate: number
  osn_tax_rate: number
  ysn_tax_rate: number
  personal_income_rate: number
  pension_contributions_rate: number
  medical_contributions_rate: number
  disability_contributions_rate: number
  lower_tax_margin_error: number
  upper_tax_margin_error: number
  cost_accounting: CostAccounting
  registration_costs: RegistrationCost
  avg_land_cadastral_value: number
  avg_land_lease_costs: number
  avg_land_purchase_costs: number
  avg_property_cadastral_value: number
  avg_property_lease_costs: number
  avg_property_purchase_costs: number
}

export interface RegistrationCost {
  legal: number
  individual: number
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

export interface ContextForFile {
  sector: string
  full_opf: string
  number_of_staff: string
  territorial_location: string
  type_tax_system: string
  land_area: string
  building_area: string
  page_1: string
  page_2: string
  page_3: string
  page_4: string
  page_5: string
  page_6: string
  all_possible_costs_bi: number
  all_staff_costs_bi: number
  all_lp_lease_costs_bi: number
  equipment_costs_bi: number
  all_tax_costs_bi: number
  all_services_costs_bi: number
  all_possible_costs_math: number
  all_staff_costs_math: number
  all_lp_lease_costs_math: number
  equipment_costs_math: number
  all_tax_costs_math: number
  all_services_costs_math: number
  avg_salary_of_staff_bi: number
  avg_personal_income_tax_bi: number
  avg_staff_pension_contributions_costs_bi: number
  avg_staff_medical_contributions_costs_bi: number
  avg_staff_disability_contributions_costs_bi: number
  avg_salary_of_staff_math: number
  avg_personal_income_tax_math: number
  avg_staff_pension_contributions_costs_math: number
  avg_staff_medical_contributions_costs_math: number
  avg_staff_disability_contributions_costs_math: number
  property_range: number
  land_range: string
  avg_property_lease_value: number
  avg_property_lease_costs: number
  all_property_lease_costs: number
  avg_property_purchase_value: number
  avg_property_purchase_costs: number
  avg_property_tax: number
  all_property_purchase_costs: number
  avg_land_lease_value: number
  avg_land_lease_costs: number
  all_land_lease_costs: number
  avg_land_purchase_value: number
  avg_land_purchase_costs: number
  avg_land_tax: number
  all_land_purchase_costs: number
  others_costs: string
  equipments: string
  offers_and_wishes: string
  avg_income_tax_math: number
  avg_income_tax_bi: number
  all_lp_tax_costs_bi: number
  all_lp_tax_costs_math: number
  avg_other_taxes_bi: number
  avg_other_taxes_math: number
}
