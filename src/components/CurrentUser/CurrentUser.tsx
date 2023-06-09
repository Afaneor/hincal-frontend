import {
  LogoutOutlined,
  PieChartOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Button, Card, Col, Dropdown, Row, Space, Typography } from 'antd'
import Link from 'next/link'
import React, { useCallback } from 'react'

import type { UsersModelProps } from '@/models'
import { useLogout } from '@/services/auth/hooks'

const { Text } = Typography

interface CurrentUserProps {
  currentUser: UsersModelProps
}

const UserName = ({ currentUser }: { currentUser: UsersModelProps }) => (
  <Text>{currentUser?.email || currentUser?.username}</Text>
)

export const CurrentUser: React.FC<CurrentUserProps> = ({ currentUser }) => {
  const { mutate: logout }: any = useLogout()

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
        <Space direction='vertical'>
          <Link href='/calculations'>
            <Button type='text' icon={<PieChartOutlined />}>
              Мои расчеты
            </Button>
          </Link>
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
        </Space>
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
            <UserOutlined /> <UserName currentUser={currentUser} />
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
