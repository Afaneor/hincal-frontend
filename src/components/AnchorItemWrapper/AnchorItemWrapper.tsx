import { Card } from 'antd'
import React from 'react'
import type { FCC } from 'src/types'

import styles from './AnchorItemWrapper.module.scss'

interface AnchorItemWrapperProps {
  title: string
  id: string
  size?: number
  bodyStyle?: React.CSSProperties
  actions?: React.ReactNode[]
}
const bodyStyleDefault = { height: '90%', overflow: 'auto' }

export const AnchorItemWrapper: FCC<AnchorItemWrapperProps> = ({
  children,
  title,
  id,
  // size = 98,
  bodyStyle,
  actions,
}) => {
  return (
    <Card
      id={id}
      title={title}
      hoverable
      // style={{ height: `${size}vh` }}
      bodyStyle={{ ...bodyStyleDefault, ...bodyStyle }}
      className={styles.container}
      actions={actions}
    >
      {children}
    </Card>
  )
}

AnchorItemWrapper.displayName = 'AnchorItemWrapper'

export default AnchorItemWrapper