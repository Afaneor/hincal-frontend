import { notification } from 'antd'
import type {
  ArgsProps,
  NotificationInstance,
} from 'antd/es/notification/interface'
import React, { useContext, useMemo } from 'react'

export const NotificationMessageContext = React.createContext({
  api: {} as NotificationInstance,
})

export const useNotification = () => {
  const { api }: { api: NotificationInstance } = useContext(
    NotificationMessageContext
  )
  const notifyInfo = (props: ArgsProps) => {
    api.info(props)
  }
  const notifySuccess = (props: ArgsProps) => {
    api.success(props)
  }
  const notifyError = (props: ArgsProps) => {
    api.error(props)
  }
  const notifyWarning = (props: ArgsProps) => {
    api.warning(props)
  }
  const notifyOpen = (props: ArgsProps) => {
    api.open({ ...props, style: { backgroundColor: 'red' } })
  }
  return { notifyInfo, notifySuccess, notifyError, notifyWarning, notifyOpen }
}
export default function NotificationMessageProvider({ children }: any) {
  const [api, contextHolder] = notification.useNotification()
  const value = useMemo(
    () => ({
      api,
    }),
    []
  )
  return (
    <NotificationMessageContext.Provider value={value}>
      {contextHolder}
      {children}
    </NotificationMessageContext.Provider>
  )
}
