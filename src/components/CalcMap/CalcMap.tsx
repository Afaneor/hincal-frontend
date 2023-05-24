import 'mapbox-gl/dist/mapbox-gl.css'

// @ts-ignore
import type { Feature, GeoJSON } from 'geojson'
import { isEmpty } from 'lodash'
import React, { useCallback, useState } from 'react'
import Map, { Layer, NavigationControl, Source } from 'react-map-gl'
import type { FCC } from 'src/types'

import { dataLayer, lineStyle } from '@/components/CalcMap/map-style'
import {
  layerFillColors,
  setColorToSelectedLocationArea,
} from '@/components/CalcMap/utils'
import { MapHoverCard } from '@/components/MapHoverCard'

// @ts-ignore
import locationAreas from './location-areas'

const initialViewState = {
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

export interface HoveInfoProps {
  feature: Feature
  x: number
  y: number
}
export const CalcMap: FCC<CalcMapProps> = ({ onChange }) => {
  const [viewState, setViewState] = useState(initialViewState)
  const [allData, setAllData] = useState<
    GeoJSON.FeatureCollection<GeoJSON.Geometry>
  >(layerFillColors(locationAreas))

  const handleSetNewFeatureCollection = (currentHoverInfo: HoveInfoProps) => {
    const collection = setColorToSelectedLocationArea(allData, currentHoverInfo)
    // @ts-ignore
    setAllData(collection)
  }
  const [hoverInfo, setHoverInfo] = useState<HoveInfoProps>({} as HoveInfoProps)

  const handleSelectLocationArea = () => {
    handleSetNewFeatureCollection(hoverInfo)
    onChange?.(hoverInfo.feature?.properties?.ref)
  }

  const onHover = useCallback((event: any) => {
    const {
      features,
      point: { x, y },
    } = event

    const hoveredFeature = features?.length && features[0]
    const hInfo = hoveredFeature && { feature: hoveredFeature, x, y }
    // prettier-ignore
    setHoverInfo(hInfo);
  }, [])

  return (
    <Map
      {...viewState}
      locale={{ ru: 'ru-Ru' }}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      style={mapStyle}
      interactiveLayerIds={['administrativeDistrictPolygons']}
      mapStyle='mapbox://styles/mapbox/streets-v9'
      onMouseMove={onHover}
      onMove={(evt) => setViewState(evt.viewState)}
    >
      <Source id='polygon-source' type='geojson' data={allData}>
        <Layer {...dataLayer} />
        <Layer {...lineStyle} />
      </Source>
      {!isEmpty(hoverInfo) && hoverInfo.feature.properties?.name && (
        <MapHoverCard
          name={`${hoverInfo.feature.properties.name}`}
          x={hoverInfo.x}
          y={hoverInfo.y}
          website={hoverInfo.feature.properties.website}
          averageCadastralValue={
            hoverInfo.feature.properties.averageCadastralValue
          }
          onSelect={handleSelectLocationArea}
        />
      )}
      <NavigationControl />
    </Map>
  )
}

CalcMap.displayName = 'CalcMap'

export default CalcMap
