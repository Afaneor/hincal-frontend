import React from 'react'

import Landing from '@/landing'
import { Meta } from '@/layouts/Meta'
import { Main } from '@/templates/Main'

export default function Index() {
  return (
    <Main
      meta={
        <Meta
          title='Главная'
          description='Калькулятор инвестиций в развитие промышленного предприятия'
        />
      }
    >
      <Landing />
    </Main>
  )
}
