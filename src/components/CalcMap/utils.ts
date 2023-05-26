// @ts-ignore
import type { Feature, GeoJSON } from 'geojson'

import averageCadastralValue from './averageСadastralValue'
import type { HoveInfoProps } from './types'

enum AdminLevel {
  historicalCenterOfMoscow = 2,
  moscow = '4',
  administrativeDistrict = '5',
  municipalDistrict = '8',
}

const getMinMaxValue = () => {
  const values = Object.values(averageCadastralValue)
  const maxV: number = Math.max(...values)
  const onePercent = 100 / maxV
  return Object.entries(averageCadastralValue).reduce(
    (acc: Record<string, undefined>, [key, val]) => {
      // @ts-ignore
      acc[key] = `hsl(${100 - val * onePercent}, 1, 0.4)`
      return acc
    },
    {}
  )
}
export const layerFillColors = (
  data: GeoJSON.FeatureCollection<GeoJSON.Geometry>
): GeoJSON.FeatureCollection<GeoJSON.Geometry> => {
  const colors = getMinMaxValue()
  const features = data?.features.map((feat: Feature) => {
    return {
      ...feat,
      properties: {
        ...feat.properties,
        // @ts-ignore
        averageCadastralValue: averageCadastralValue[feat.properties.ref],
        color:
          feat.properties?.admin_level === AdminLevel.administrativeDistrict &&
          feat.properties?.ref
            ? colors[feat.properties.ref]
            : '',
      },
    }
  })
  return {
    type: 'FeatureCollection',
    features,
  }
}

export const setColorToSelectedLocationArea = (
  locationAreas: GeoJSON.FeatureCollection<GeoJSON.Geometry>,
  hoverInfos: HoveInfoProps[]
) => {
  const defaultColorsData = layerFillColors(locationAreas)
  const infoRefs = hoverInfos?.map((hi) => hi.feature?.properties?.ref)
  const features = defaultColorsData.features.map((feat) => {
    const color = infoRefs.includes(feat.properties?.ref)
      ? '#112eff'
      : feat.properties?.color

    return {
      ...feat,
      properties: {
        ...feat.properties,
        color,
      },
    }
  })
  return {
    type: 'FeatureCollection',
    features,
  }
}
