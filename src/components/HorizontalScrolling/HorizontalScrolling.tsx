import 'react-horizontal-scrolling-menu/dist/styles.css'

import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { Button, Card } from 'antd'
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'

import type { BaseModelProps } from '@/models'

const { Meta } = Card

interface HorizontalScrollingProps<
  DataType extends BaseModelProps | null = BaseModelProps
> {
  data: DataType[]
}

const btnRStyle = { alignSelf: 'center', left: -15 }
const btnLStyle = { alignSelf: 'center', right: -15, zIndex: 100 }
function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext)

  return (
    <Button
      icon={<LeftOutlined />}
      shape='circle'
      size='large'
      disabled={isFirstItemVisible}
      style={btnLStyle}
      onClick={() => scrollPrev()}
    />
  )
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = useContext(VisibilityContext)

  return (
    <Button
      icon={<RightOutlined />}
      shape='circle'
      size='large'
      style={btnRStyle}
      disabled={isLastItemVisible}
      onClick={() => scrollNext()}
    />
  )
}
function CardS({ onClick, title, site }: any) {
  const visibility = useContext(VisibilityContext)

  return (
    <div style={{ padding: 10 }}>
      <Card
        onClick={() => onClick(visibility)}
        style={{
          width: '260px',
        }}
        tabIndex={0}
        hoverable
      >
        <Meta
          title={title}
          description={
            site ? (
              <Link target='_blank' href={site}>
                Подробнее
              </Link>
            ) : (
              ''
            )
          }
        />
      </Card>
    </div>
  )
}

const HorizontalScrolling = ({ data }: HorizontalScrollingProps) => {
  const [selected, setSelected] = useState([])

  const isItemSelected = (id: number) => !!selected.find((el) => el === id)

  const handleClick = (id: number) => () => {
    const itemSelected = isItemSelected(id)

    setSelected((currentSelected) =>
      itemSelected
        ? currentSelected.filter((el) => el !== id)
        : // @ts-ignore
          currentSelected.concat(id)
    )
  }

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data?.map((item: Record<string, any>) => (
        <CardS
          itemId={item.id} // NOTE: itemId is required for track items
          title={`${item.title} ${item?.interest_rate}`}
          site={item.site}
          key={item.id}
          onClick={handleClick(item.id)}
          selected={isItemSelected(item.id)}
        />
      ))}
    </ScrollMenu>
  )
}

HorizontalScrolling.displayName = 'HorizontalScrolling'

export default HorizontalScrolling
