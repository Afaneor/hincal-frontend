import { LogoutOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Card, Col, Dropdown, Row, Typography } from 'antd'
import React, { useCallback } from 'react'

import { useQueryCache } from '@/hooks/useQueryCache'
import type { UsersModelProps } from '@/models'
import { useLogout } from '@/services/auth/hooks'

const { Text } = Typography

interface CurrentUserProps {
  src?: string
}

const UserName = ({ currentUser }: { currentUser: UsersModelProps }) => (
  <Text>{currentUser?.email || currentUser?.username}</Text>
)

export const CurrentUser: React.FC<CurrentUserProps> = () => {
  const { mutate: logout }: any = useLogout()
  const { data }: { data: UsersModelProps } | any = useQueryCache('getInfo')
  const handleLogout = () => {
    logout(
      {},
      {
        onSuccess: () => {
          window.location.reload()
        },
      }
    )
  }

  const DropdownRender = useCallback(
    () => (
      <Card>
        <Button
          type='text'
          icon={<LogoutOutlined />}
          onClick={(e) => {
            e.stopPropagation()
            handleLogout()
          }}
        >
          Выйти
        </Button>
      </Card>
    ),
    []
  )
  return (
    <Row gutter={8} data-testid='test-CurrentUser'>
      <Col xs={0} md={24}>
        <Dropdown
          placement='bottom'
          trigger={['click']}
          dropdownRender={DropdownRender}
        >
          <Button type='text' onClick={(e) => e.stopPropagation()}>
            <UserOutlined /> <UserName currentUser={data} />
          </Button>
        </Dropdown>
      </Col>
      <Col md={0}>
        <Dropdown
          placement='bottom'
          trigger={['click']}
          dropdownRender={DropdownRender}
        >
          <Button
            shape='circle'
            icon={<UserOutlined />}
            onClick={(e) => e.stopPropagation()}
          />
        </Dropdown>
      </Col>
    </Row>
  )
}

CurrentUser.displayName = 'CurrentUser'

export default CurrentUser
