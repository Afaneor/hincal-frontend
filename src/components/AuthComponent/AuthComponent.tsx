import { UserOutlined } from '@ant-design/icons'
import { Button, Spin } from 'antd'
import Link from 'next/link'
import React from 'react'

import { useUserGetInfo } from '@/services/auth/hooks'

import { CurrentUser } from '../CurrentUser'

const AuthComponent = () => {
  const { data, isLoading }: { data: any; isLoading: boolean } = useUserGetInfo(
    {
      refetchOnWindowFocus: false,
    }
  )
  if (data?.status === 200) {
    return <CurrentUser />
  }
  return (
    <Spin spinning={isLoading}>
      <Link href='/login'>
        <Button shape='circle' icon={<UserOutlined />} />
      </Link>
    </Spin>
  )
}

AuthComponent.displayName = 'AuthComponent'

export default AuthComponent
