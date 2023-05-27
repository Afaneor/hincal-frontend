import type { QueryKey, UseQueryOptions } from '@tanstack/react-query'
import { useMutation, useQuery } from '@tanstack/react-query'
import AuthServices from 'src/services/auth/AuthServices'
import type { LoginValuesTypes } from 'src/services/auth/types'

/**
 * Хук установки пароля пользовтеля
 */
export const useLogin = () => {
  return useMutation({
    mutationKey: ['login'],
    mutationFn: (credentials: LoginValuesTypes) =>
      AuthServices.login('login', credentials),
  })
}
/**
 * Хук разлогинивания пользователя
 */
export const useLogout = () => {
  // window.localStorage.removeItem('user')

  return useMutation(() => AuthServices.logout('logout'), {
    mutationKey: ['logout'],
  })
}

/**
 * Хук для получения информации о текущем пользователе
 * @param options
 */
export const useUserGetInfo = (options?: UseQueryOptions) => {
  return useQuery(['getInfo'] as QueryKey, () => AuthServices.getUserInfo(), {
    ...options,
  })
}
