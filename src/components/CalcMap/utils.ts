// @ts-ignore
import type { GeoJSON } from 'geojson'

// import { hsl } from 'polished'
import averageCadastralValue from './averageСadastralValue'

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
  return {
    type: 'FeatureCollection',
    features: data?.features.map((feat: any) => {
      return {
        ...feat,
        properties: {
          ...feat.properties,
          // @ts-ignore
          averageCadastralValue: averageCadastralValue[feat.properties.ref],
          color:
            feat.properties.admin_level === AdminLevel.administrativeDistrict
              ? colors[feat.properties.ref]
              : '',
        },
      }
    }),
  }
}
