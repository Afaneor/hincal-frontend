import 'mapbox-gl/dist/mapbox-gl.css'
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'

import area from '@turf/area'
import type { Feature } from '@turf/helpers'
// @ts-ignore
import type { GeoJSON } from 'geojson'
import { isEmpty } from 'lodash'
import React, { useCallback, useMemo, useState } from 'react'
import Map, { Layer, NavigationControl, Source } from 'react-map-gl'
import type { FCC } from 'src/types'

import { dataLayer, lineStyle } from '@/components/CalcMap/map-style'
import {
  layerFillColors,
  setColorToSelectedLocationArea,
} from '@/components/CalcMap/utils'
import { DrawControl } from '@/components/DrawControl'
import { MapHoverCard } from '@/components/MapHoverCard'

// @ts-ignore
import locationAreas from './location-areas'
import type { HoveInfoProps } from './types'

const initialViewState = {
  longitude: 37.535096698033755,
  latitude: 55.599193399227545,
  zoom: 8,
}
const mapStyle = { width: '100%', height: '65vh' }

interface CalcMapProps {
  freezeMap?: boolean

  onChange?: (
    feature:
      | GeoJSON.FeatureCollection<GeoJSON.Geometry>['features'][]
      | HoveInfoProps[],
    features: any
  ) => void
}

const drawControls = {
  polygon: true,
  trash: true,
}

export const CalcMap: FCC<CalcMapProps> = ({ onChange, freezeMap }) => {
  const [viewState, setViewState] = useState(initialViewState)
  const [features, setFeatures] = useState({})
  const [selectedPolygonsInMeters, setSelectedPolygonsInMeters] = useState(0)
  const [allData, setAllData] = useState<
    GeoJSON.FeatureCollection<GeoJSON.Geometry>
  >(layerFillColors(locationAreas))
  const [selected, setSelected] = useState([] as HoveInfoProps[])
  const [hoverInfo, setHoverInfo] = useState<HoveInfoProps>({} as HoveInfoProps)

  const handleSetNewFeatureCollection = (currentHoverInfo: HoveInfoProps[]) => {
    const collection = setColorToSelectedLocationArea(allData, currentHoverInfo)
    setSelected(currentHoverInfo)
    // @ts-ignore
    setAllData(collection)
  }

  const handleSelectLocationArea = () => {
    const res = [...selected, hoverInfo]
    handleSetNewFeatureCollection(res)
    onChange?.(res, features)
  }
  const handleDiselectLocationArea = () => {
    const index = selected.findIndex(
      (sel) =>
        sel.feature?.properties?.ref === hoverInfo?.feature?.properties?.ref
    )
    const tempSelected = [...selected]
    tempSelected.splice(index, 1)

    handleSetNewFeatureCollection(tempSelected)
    onChange?.(tempSelected, features)
  }

  const onHover = useCallback((event: any) => {
    const {
      features: eventFeats,
      point: { x, y },
    } = event

    const hoveredFeature = eventFeats?.length && eventFeats[0]
    const hInfo = hoveredFeature && { feature: hoveredFeature, x, y }
    // prettier-ignore
    setHoverInfo(hInfo);
  }, [])

  const onUpdate = useCallback((e: { features: Record<string, any>[] }) => {
    setFeatures((currFeatures) => {
      const newFeatures = { ...currFeatures } as Record<string, any>
      for (const f of e.features) {
        newFeatures[f.id] = f
      }
      setSelectedPolygonsInMeters(
        Object.values(newFeatures).reduce(
          (value: number, feature: Feature) => area(feature) + value,
          0
        ) || 0
      )
      return newFeatures
    })
  }, [])

  const areaIsSelected = useMemo(() => {
    const sList = selected?.map((s) => s.feature?.properties?.ref)
    const hList = hoverInfo?.feature?.properties?.ref
    return sList.includes(hList)
  }, [hoverInfo])

  return (
    <>
      <Map
        {...viewState}
        locale={{ ru: 'ru-Ru' }}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        style={mapStyle}
        interactiveLayerIds={['administrativeDistrictPolygons']}
        mapStyle='mapbox://styles/mapbox/streets-v9'
        onMouseMove={onHover}
        onMove={(evt) => !freezeMap && setViewState(evt.viewState)}
      >
        <Source id='polygon-source' type='geojson' data={allData}>
          <Layer {...dataLayer} />
          <Layer {...lineStyle} />
        </Source>
        <DrawControl
          position='top-left'
          displayControlsDefault={false}
          controls={drawControls}
          onCreate={onUpdate}
          onUpdate={onUpdate}
          onDelete={onUpdate}
        />
        {!isEmpty(hoverInfo) && hoverInfo.feature.properties?.name && (
          <MapHoverCard
            noSelectBtn={freezeMap}
            isSelected={areaIsSelected}
            name={`${hoverInfo.feature.properties.name}`}
            x={hoverInfo.x}
            y={hoverInfo.y}
            website={hoverInfo.feature.properties.website}
            averageCadastralValue={
              hoverInfo.feature.properties.averageCadastralValue
            }
            onSelect={handleSelectLocationArea}
            onDiselect={handleDiselectLocationArea}
          />
        )}
        {!freezeMap ? <NavigationControl /> : null}
      </Map>
      <>
        Выбранная площадь:
        {Math.round(selectedPolygonsInMeters)}
      </>
    </>
  )
}

CalcMap.displayName = 'CalcMap'

export default CalcMap
