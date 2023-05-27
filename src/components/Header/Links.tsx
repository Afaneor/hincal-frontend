import {
  BarChartOutlined,
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
    text: 'Промплощадки',
    href: '/areas',
    icon: <SketchOutlined />,
  },
  {
    text: 'Аналитика',
    href: '/analytics',
    icon: <BarChartOutlined />,
  },
  {
    text: 'Блог',
    href: '/blog',
    icon: <LaptopOutlined />,
  },
]
