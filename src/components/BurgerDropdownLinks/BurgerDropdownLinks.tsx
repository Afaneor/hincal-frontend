import { MenuOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Button, Dropdown } from 'antd'
import Link from 'next/link'
import React, { useMemo } from 'react'
import type { FCC } from 'src/types'

import { Links } from '@/layouts/Header/Links'

interface BurgerDropdownLinksProps {
  prop?: any
}

export const BurgerDropdownLinks: FCC<BurgerDropdownLinksProps> = () => {
  const items: MenuProps['items'] = useMemo(
    () =>
      Links?.map((link) => ({
        label: (
          <Link href={link.href}>
            <Button type='link' icon={link.icon}>
              {link.text}
            </Button>
          </Link>
        ),
        key: link.href,
      })),
    []
  )
  return (
    <Dropdown menu={{ items }} trigger={['click']}>
      <Button
        type='primary'
        ghost
        shape='circle'
        icon={<MenuOutlined />}
        onClick={(e) => e.preventDefault()}
      />
    </Dropdown>
  )
}

BurgerDropdownLinks.displayName = 'BurgerDropdownLinks'

export default BurgerDropdownLinks
