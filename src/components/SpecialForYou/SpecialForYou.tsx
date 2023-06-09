import { Button, Collapse, Divider, Typography } from 'antd'
import Link from 'next/link'
import React from 'react'
import type { FCC } from 'src/types'

import type { AreaModelProps, SupportModelProps } from '@/models'
import type { OfferModelProps } from '@/models/Offer'

const { Panel } = Collapse
const { Text } = Typography
interface SpecialForYouProps {
  areas?: AreaModelProps[]
  offers?: OfferModelProps[]
  supports?: SupportModelProps[]
}
const ExternalBtnLink = ({
  item,
}: {
  item: AreaModelProps | OfferModelProps | SupportModelProps
}) => (
  <Link href={item.site} target='_blank'>
    <Button style={{ maxWidth: 400, margin: '0 10px 10px 0' }}>
      <Text ellipsis>{item.title}</Text>
    </Button>
  </Link>
)

const SpecialForYou: FCC<SpecialForYouProps> = ({
  areas,
  offers,
  supports,
}) => {
  return (
    <>
      <Divider>Подобрали специально для Вас</Divider>
      <Collapse>
        {areas?.length ? (
          <Panel
            header='Промлощадки'
            key='areas'
            extra={<Link href='/areas'>Все промлощадки</Link>}
          >
            {areas?.map((area) => (
              <ExternalBtnLink key={area.id} item={area} />
            ))}
          </Panel>
        ) : null}
        {offers?.length ? (
          <Panel
            header='Предложения по кредитованию'
            key='offers'
            extra={
              <Link href='/offers' target='_blank'>
                Все предложения
              </Link>
            }
          >
            {offers?.map((offer) => (
              <ExternalBtnLink key={offer.id} item={offer} />
            ))}
          </Panel>
        ) : null}
        {supports?.length ? (
          <Panel
            header='Поддержка бизнеса'
            key='supports'
            extra={<Link href='/supports'>Все меры поддержки</Link>}
          >
            {supports?.map((support) => (
              <ExternalBtnLink key={support.id} item={support} />
            ))}
          </Panel>
        ) : null}
      </Collapse>
    </>
  )
}

SpecialForYou.displayName = 'SpecialForYou'

export default SpecialForYou
