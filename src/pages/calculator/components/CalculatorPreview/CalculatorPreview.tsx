import React from 'react'

import type { FCC } from '@/types'

import styles from './CalculatorPreview.module.scss'

interface CalculatorPreviewProps {
  prop?: any
}
export const CalculatorPreview: FCC<CalculatorPreviewProps> = () => {
  return (
    <div className={styles.container} data-testid='test-CalculatorPreview'>
      CalculatorPreview
    </div>
  )
}

CalculatorPreview.displayName = 'CalculatorPreview'

export default CalculatorPreview
