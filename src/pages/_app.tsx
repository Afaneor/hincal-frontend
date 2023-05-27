import 'antd/dist/reset.css'
import '../styles/global.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import React from 'react'

import NotificationMessageProvider from '@/components/NotificationMessage/NotificationMessage'

import RenderDelay from '../components/RenderDelay/RenderDelay'

const qClientConfig = {
  defaultOptions: {},
}

const queryClient = new QueryClient(qClientConfig)
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <RenderDelay>
      <QueryClientProvider client={queryClient}>
        <NotificationMessageProvider>
          <Component {...pageProps} />
        </NotificationMessageProvider>
      </QueryClientProvider>
    </RenderDelay>
  )
}

export default appWithTranslation(MyApp)
