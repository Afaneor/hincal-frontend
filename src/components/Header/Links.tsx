import {
  CalculatorOutlined,
  HomeOutlined,
  LaptopOutlined,
  SketchOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons'
import React from 'react'

export const Links = [
  {
    text: 'Дом',
    href: '/',
    icon: <HomeOutlined />,
  },
  {
    text: 'Калькулятор',
    href: '/calculator',
    icon: <CalculatorOutlined />,
  },
  {
    text: 'Предложения от партнеров',
    href: '/offers',
    icon: <UsergroupAddOutlined />,
  },
  {
    text: 'Меры поддержки',
    href: '/supports',
    icon: <SketchOutlined />,
  },
  {
    text: 'Промплощадки',
    href: '/areas',
    icon: <SketchOutlined />,
  },
  {
    text: 'Аналитика',
    href: '/analytics',
    icon: <SketchOutlined />,
  },
  {
    text: 'Блог',
    href: '/blog',
    icon: <LaptopOutlined />,
  },
]
