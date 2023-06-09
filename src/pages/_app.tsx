import 'antd/dist/reset.css'
import '../styles/global.css'
import '../../public/antd.min.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import React from 'react'

import CurrentUserProvider from '@/components/CurrentUserProvider/CurrentUserProvider'
import NotificationMessageProvider from '@/components/NotificationMessage/NotificationMessage'

const qClientConfig = {
  defaultOptions: {},
}

const queryClient = new QueryClient(qClientConfig)
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <NotificationMessageProvider>
        <CurrentUserProvider>
          <Component {...pageProps} />
        </CurrentUserProvider>
      </NotificationMessageProvider>
    </QueryClientProvider>
  )
}

export default appWithTranslation(MyApp)
