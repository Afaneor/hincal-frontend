import { UserOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import Link from 'next/link'
import React from 'react'

import { useUserGetInfo } from '@/services/auth/hooks'

import { CurrentUser } from '../CurrentUser'

const AuthComponent = () => {
  const { data }: { data: any; isLoading: boolean } = useUserGetInfo({
    refetchOnWindowFocus: false,
  })
  if (data?.status === 200) {
    return <CurrentUser />
  }
  return (
    <Link href='/login'>
      <Button shape='circle' icon={<UserOutlined />} />
    </Link>
  )
}

AuthComponent.displayName = 'AuthComponent'

export default AuthComponent
