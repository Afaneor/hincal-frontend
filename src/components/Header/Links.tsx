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
    text: '',
    href: '/',
    icon: <HomeOutlined />,
  },
  {
    text: 'Калькулятор',
    href: '/calculator',
    icon: <CalculatorOutlined />,
  },
  {
    text: 'Найти партнера',
    href: '/partners',
    icon: <UsergroupAddOutlined />,
  },
  {
    text: 'Крупным инвесторам',
    href: '/investors',
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
