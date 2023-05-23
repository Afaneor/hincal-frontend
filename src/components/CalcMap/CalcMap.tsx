import 'mapbox-gl/dist/mapbox-gl.css'

// @ts-ignore
import type { GeoJSON } from 'geojson'
import React, { useCallback, useState } from 'react'
import Map, { Layer, NavigationControl, Source } from 'react-map-gl'
import type { FCC } from 'src/types'

import { dataLayer, lineStyle } from '@/components/CalcMap/map-style'
import { layerFillColors } from '@/components/CalcMap/utils'
import { MapHoverCard } from '@/components/MapHoverCard'

// @ts-ignore
import geojsondata from './moscow'

const viewState = {
  longitude: 37.535096698033755,
  latitude: 55.599193399227545,
  zoom: 8,
}
const mapStyle = { width: '100%', height: '65vh' }

interface CalcMapProps {
  onChange?: (
    feature: GeoJSON.FeatureCollection<GeoJSON.Geometry>['features']
  ) => void
}
// from_staff от скольки персонала to_staff до скольки персонала
export const CalcMap: FCC<CalcMapProps> = ({ onChange }) => {
  const [allData] = useState<GeoJSON.FeatureCollection<GeoJSON.Geometry>>(
    layerFillColors(geojsondata)
  )
  const [hoverInfo, setHoverInfo] = useState<any>(null)

  const onHover = useCallback((event: any) => {
    const {
      features,
      point: { x, y },
    } = event
    const hoveredFeature = features?.length && features[0]
    // prettier-ignore
    setHoverInfo(hoveredFeature && {feature: hoveredFeature, x, y});
  }, [])
  return (
    <Map
      initialViewState={viewState}
      locale={{ ru: 'ru-Ru' }}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      style={mapStyle}
      interactiveLayerIds={['administrativeDistrictPolygons']}
      mapStyle='mapbox://styles/mapbox/streets-v9'
      onMouseMove={onHover}
    >
      <Source id='polygon-source' type='geojson' data={allData}>
        <Layer {...dataLayer} />
        <Layer {...lineStyle} />
      </Source>
      {hoverInfo && hoverInfo.feature.properties.name && (
        <MapHoverCard
          name={`${hoverInfo.feature.properties.name}`}
          x={hoverInfo.x}
          y={hoverInfo.y}
          website={hoverInfo.feature.properties.website}
          averageCadastralValue={
            hoverInfo.feature.properties.averageCadastralValue
          }
          onSelect={() => onChange?.(hoverInfo.feature.properties.ref)}
        />
      )}
      <NavigationControl />
    </Map>
  )
}

CalcMap.displayName = 'CalcMap'

export default CalcMap
