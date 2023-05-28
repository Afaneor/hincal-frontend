import { MenuOutlined } from '@ant-design/icons'
import type { ButtonProps, MenuProps } from 'antd'
import { Button, Dropdown } from 'antd'
import Link from 'next/link'
import React, { useMemo } from 'react'
import type { FCC } from 'src/types'

import { Links } from '@/components/Header/Links'

interface BurgerDropdownLinksProps extends ButtonProps {
  dropdownRender?: React.ReactNode
}

export const BurgerDropdownLinks: FCC<BurgerDropdownLinksProps> = ({
  dropdownRender,
}) => {
  const items: MenuProps['items'] = useMemo(
    () =>
      Links?.map((link) => ({
        label: (
          <Link href={link.href}>
            <Button type='link'>{link.text}</Button>
          </Link>
        ),
        key: link.href,
      })),
    []
  )
  return (
    <Dropdown
      menu={{ items }}
      trigger={['click']}
      dropdownRender={dropdownRender ? () => dropdownRender : undefined}
    >
      <Button
        shape='circle'
        icon={<MenuOutlined />}
        onClick={(e) => e.preventDefault()}
      />
    </Dropdown>
  )
}

BurgerDropdownLinks.displayName = 'BurgerDropdownLinks'

export default BurgerDropdownLinks
