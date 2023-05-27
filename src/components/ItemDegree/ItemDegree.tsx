import React from 'react'
import type { FCC } from 'src/types'

interface ItemDegreeProps {
  value: string | number
  degree: string | number
}

const ItemDegree: FCC<ItemDegreeProps> = ({ value, degree }) => {
  return (
    <span>
      {value}
      <sup>{degree}</sup>
    </span>
  )
}

ItemDegree.displayName = 'ItemDegree'

export default ItemDegree
