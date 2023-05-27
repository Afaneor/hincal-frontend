import type { Feature, Geometry } from 'geojson'

import type { TerritorialLocationModelProps } from '@/models'

export interface HoveInfoProps {
  feature: Feature<Geometry, FeatureProps>
  x: number
  y: number
}

export interface FeatureProps {
  '@id': string
  'addr:country': string
  'addr:region': string
  admin_level: '4' | '5' | '8'
  boundary: string
  name: string
  'name:be': string
  'name:de': string
  'name:en': string
  'name:ru': string
  'name:uk': string
  'name:zh': string
  'name:zh-Hans': string
  'name:zh-Hant': string
  ref: string
  type: string
  website: string
  wikidata: string
  wikipedia: string
  '@relations': string
  averageCadastralValue: number
  color: string
  territorialLocation?: TerritorialLocationModelProps
}
