import React, { createContext, useMemo } from 'react'
import type { FCC } from 'src/types'

import type { UsersModelProps } from '@/models'
import { useUserGetInfo } from '@/services/auth/hooks'

export const CurrentUserContext = createContext(
  {} as { currentUser: UsersModelProps }
)
const CurrentUserProvider: FCC = ({ children }) => {
  const { data }: { data: any; isLoading: boolean } = useUserGetInfo({
    refetchOnWindowFocus: false,
  })

  const providerValue = useMemo(
    () => ({
      currentUser: data?.data,
    }),
    [data]
  )

  return (
    <CurrentUserContext.Provider value={providerValue}>
      {children}
    </CurrentUserContext.Provider>
  )
}

CurrentUserProvider.displayName = 'CurrentUserProvider'

export default CurrentUserProvider
