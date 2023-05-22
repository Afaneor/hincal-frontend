import type { FillLayer, LineLayer } from 'react-map-gl'

// For more information on data-driven styles, see https://www.mapbox.com/help/gl-dds-ref/
export const dataLayer: FillLayer = {
  id: 'administrativeDistrictPolygons',
  type: 'fill',
  source: 'polygon-source',
  paint: {
    'fill-color': ['get', 'color'],
    'fill-opacity': [
      'case',
      ['boolean', ['feature-state', 'hover'], false],
      1,
      0.5,
    ],
  },
}

export const lineStyle: LineLayer = {
  id: 'lines',
  type: 'line',
  source: 'polygon-source',
  paint: {
    'line-color': 'black',
    'line-width': 3,
    'line-blur': 10,
  },
}
