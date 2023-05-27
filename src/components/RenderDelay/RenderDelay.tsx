import React, { useEffect, useState } from 'react'
import type { FCC } from 'src/types'

import { LayoutLoading } from '@/components/LayoutLoading'

// @ts-ignore
const RenderDelay: FCC = ({ children }) => {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true)
    }, 0)
    return () => clearTimeout(timer)
  }, [])

  return !show ? <LayoutLoading /> : children
}

RenderDelay.displayName = 'RenderDelay'

export default RenderDelay
