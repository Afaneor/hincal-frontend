import type { FC, PropsWithChildren, SyntheticEvent } from 'react'

// eslint-disable-next-line @typescript-eslint/naming-convention,@typescript-eslint/ban-types
export type FCC<P = {}> = FC<PropsWithChildren<P>>
export type Nullable<T> = T | null
export type HTMLElementEvent<T extends HTMLElement> = SyntheticEvent & {
  target: T
}

export interface ChoiceProps {
  value: string
  display_name: string
}
