import Link from 'next/link'
import React from 'react'
import type { FCC } from 'src/types'

const LoginOrRegisterToGetPersonInfo: FCC = () => {
  return (
    <div>
      Чтобы получить доступ к подробному расчету и персональным предложениям
      <Link href='/registration'> зарегистрируйтесь </Link>
      или
      <Link href='/login'> войдите в свой аккаунт</Link>
    </div>
  )
}

LoginOrRegisterToGetPersonInfo.displayName = 'LoginOrRegisterToGetPersonInfo'

export default LoginOrRegisterToGetPersonInfo
