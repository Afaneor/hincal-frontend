import { UserOutlined } from '@ant-design/icons'
import { Button, Spin } from 'antd'
import Link from 'next/link'
import React, { useContext } from 'react'

import { CurrentUserContext } from '@/components/CurrentUserProvider/CurrentUserProvider'

import { CurrentUser } from '../CurrentUser'

const AuthComponent = () => {
  const { currentUser } = useContext(CurrentUserContext)

  if (currentUser) {
    return <CurrentUser currentUser={currentUser} />
  }

  return (
    <Spin spinning={false}>
      <Link href='/login'>
        <Button shape='circle' icon={<UserOutlined />} />
      </Link>
    </Spin>
  )
}

AuthComponent.displayName = 'AuthComponent'

export default AuthComponent
