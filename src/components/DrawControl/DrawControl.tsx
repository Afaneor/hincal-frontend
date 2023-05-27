import type { DrawEventType, DrawMode } from '@mapbox/mapbox-gl-draw'
import MapboxDraw from '@mapbox/mapbox-gl-draw'
import type { ControlPosition, MapRef } from 'react-map-gl'
import { useControl } from 'react-map-gl'

export type ModeChangeType = { mode: DrawMode; type: DrawEventType }

type DrawControlProps = ConstructorParameters<typeof MapboxDraw>[0] & {
  position?: ControlPosition

  onCreate?: (evt: { features: object[] }) => void
  onUpdate?: (evt: { features: object[]; action: string }) => void
  onDelete?: (evt: { features: object[] }) => void
  onModechange?: (evt: ModeChangeType) => void
}

export default function DrawControl(props: DrawControlProps) {
  useControl<MapboxDraw>(
    () => new MapboxDraw(props),
    ({ map }: { map: MapRef }) => {
      // @ts-ignore
      map.on('draw.create', props.onCreate)
      // @ts-ignore
      map.on('draw.update', props.onUpdate)
      // @ts-ignore
      map.on('draw.delete', props.onDelete)
      // @ts-ignore
      map.on('draw.modechange', props.onModechange)
    },
    ({ map }: { map: MapRef }) => {
      // @ts-ignore
      map.off('draw.create', props.onCreate)
      // @ts-ignore
      map.off('draw.update', props.onUpdate)
      // @ts-ignore
      map.off('draw.delete', props.onDelete)
      // @ts-ignore
      map.on('draw.modechange', props.onModechange)
    },
    {
      position: props.position,
    }
  )

  return null
}

DrawControl.defaultProps = {
  onCreate: () => {},
  onUpdate: () => {},
  onDelete: () => {},
  onModechange: () => {},
}
