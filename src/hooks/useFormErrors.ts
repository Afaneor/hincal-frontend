import { useState } from 'react'

export interface FormErrorsHook {
  errors: FormErrorObj
  setFormErrors: (responseErrors: any) => void
}
export interface FormError {
  validateStatus:
    | ''
    | 'error'
    | 'success'
    | 'warning'
    | 'validating'
    | undefined
  help: string
}
interface FormErrorObj {
  [key: string]: FormError
}

const getErrorsObj = (errors: string[]): FormError => {
  return {
    validateStatus: 'error',
    help: errors?.join(', '),
  }
}
/**
 * Хук подготовки ошибок с бэка для формы
 * Для компонента _base/FormItem нужно передать errors={errors['propErrorName']}
 * В Form.Item нужно деструктуризировать объект ошибок {...errors['propErrorName']}
 */
export const useFormErrors = () => {
  const [errors, setErrors] = useState({})
  const setFormErrors = (responseErrors: Record<string, string[]>) => {
    const formErrorsObj = {} as FormErrorObj
    Object.entries(responseErrors).forEach(
      ([k, errorsList]: [k: string, errorsList: string[]]) => {
        formErrorsObj[k] = getErrorsObj(errorsList)
      }
    )
    setErrors(() => ({ ...formErrorsObj }))
  }

  return { errors, setFormErrors }
}
