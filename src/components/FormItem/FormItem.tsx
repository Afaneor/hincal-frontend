import { Form } from 'antd'
import type { FormItemProps } from 'antd/es/form/FormItem'
import React from 'react'
import type { FormError } from 'src/hooks/useFormErrors'

import styles from './style.module.scss'

export interface PropsFormItem extends FormItemProps {
  errors?: FormError
}
export const FormItem: React.FC<PropsFormItem> = (props) => {
  return (
    <Form.Item className={styles.anim} {...props} {...props.errors}>
      {props.children}
    </Form.Item>
  )
}

FormItem.displayName = 'FormItem'

export default FormItem
