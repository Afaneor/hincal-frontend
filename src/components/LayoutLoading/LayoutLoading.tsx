import { Spin } from 'antd'
import React from 'react'

import styles from './style.module.scss'

export const LayoutLoading: React.FC = () => {
  return (
    <div className={styles.container}>
      <Spin size='large' />
    </div>
  )
}

LayoutLoading.displayName = 'LayoutLoading'

export default LayoutLoading
