export interface StatisticsAllModelProps {
  popular_sector: PopularSectorProps[]
  average_investment_amount_bi: number
  average_investment_amount_math: number
  total_investment_amount_bi: number
  total_investment_amount_math: number
  number_of_reports: number
  number_of_business: number
}
export interface PopularSectorProps {
  sector_name: string
  count: number
}

export class StatisticsAllModel {
  static modelName = 'statisticsAll'

  static url() {
    return '/hincal/statistics/all'
  }
}
