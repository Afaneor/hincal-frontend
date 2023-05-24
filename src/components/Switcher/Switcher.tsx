import { Space, Switch, Typography } from 'antd'
import type { SwitchProps } from 'antd/es/switch'
import React from 'react'
import type { FCC } from 'src/types'

const { Text } = Typography

interface SwitcherProps extends SwitchProps {
  label?: string
  size?: 'small'
  labelPosition?: 'start' | 'end'
  onChange?: (checked: boolean) => void
}
export const Switcher: FCC<SwitcherProps> = (props) => {
  const { checked, labelPosition = 'end', label, size, onChange } = props
  return (
    <Space>
      {labelPosition === 'start' ? <Text>{label}</Text> : null}
      <Switch checked={checked} size={size} onChange={onChange} {...props} />
      {labelPosition === 'end' ? <Text>{label}</Text> : null}
    </Space>
  )
}

Switcher.displayName = 'Switcher'

export default Switcher
