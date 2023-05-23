import { Card } from 'antd'
import React from 'react'
import type { FCC } from 'src/types'

import styles from './AnchorItemWrapper.module.scss'

interface AnchorItemWrapperProps {
  title: string
  id: string
  size?: number
  bodyStyle?: React.CSSProperties
}
const bodyStyleDefault = { height: '90%', overflow: 'auto' }

export const AnchorItemWrapper: FCC<AnchorItemWrapperProps> = ({
  children,
  title,
  id,
  size = 98,
  bodyStyle,
}) => {
  return (
    <Card
      id={id}
      title={title}
      hoverable
      style={{ height: `${size}vh` }}
      bodyStyle={{ ...bodyStyleDefault, ...bodyStyle }}
      className={styles.container}
    >
      {children}
    </Card>
  )
}

AnchorItemWrapper.displayName = 'AnchorItemWrapper'

export default AnchorItemWrapper
