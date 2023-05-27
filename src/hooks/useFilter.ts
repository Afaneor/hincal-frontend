import { isEmpty } from 'lodash'
import { useState } from 'react'

/**
 * Хук для сбора query params в один объект
 * @param initValue
 */
export const useFilter = (initValue: any = {}) => {
  const [value, setValue] = useState(initValue)

  const handleFilter = (filter: Record<string, any>) => {
    const filterFieldsWithValue = {} as Record<string, any>

    setValue((prevState: Record<string, any>) => {
      if (isEmpty(filter)) {
        return {}
      }
      for (const [key, val] of Object.entries(filter)) {
        if (val) {
          filterFieldsWithValue[key] = val
        } else {
          // eslint-disable-next-line no-param-reassign
          delete prevState[key]
        }
      }
      return { ...prevState, ...filterFieldsWithValue }
    })
  }

  return [value, handleFilter]
}
