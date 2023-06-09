import { Button, Collapse, Divider, Popover, Typography } from 'antd'
import Link from 'next/link'
import React from 'react'
import type { FCC } from 'src/types'

import { OfferCard } from '@/components/OfferCard'
import { SupportCard } from '@/components/SupportCard'
import type { AreaModelProps, SupportModelProps } from '@/models'
import type { OfferModelProps } from '@/models/Offer'
import { AreaCard } from '@/pages/areas'

const { Panel } = Collapse
const { Text } = Typography
interface SpecialForYouProps {
  areas?: AreaModelProps[]
  offers?: OfferModelProps[]
  supports?: SupportModelProps[]
}

interface ExternalBtnLinkProps {
  title?: string
  site: string
  content?: React.ReactNode
}

const styleBtn = { maxWidth: 300, margin: '0 10px 10px 0' }
const ExternalBtnLink = ({ title, site, content }: ExternalBtnLinkProps) => (
  <Popover content={content}>
    <Link href={site} target='_blank'>
      <Button size='small' style={styleBtn}>
        <Text ellipsis>{title}</Text>
      </Button>
    </Link>
  </Popover>
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
              <ExternalBtnLink
                key={area.id}
                title={area.title}
                site={area.site}
                content={
                  <AreaCard
                    title={area.title}
                    preview_image={area.preview_image}
                    territorial_location={area.territorial_location}
                    address={area.address}
                    text={area.text}
                    bordered={false}
                    style={{ width: 400 }}
                  />
                }
              />
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
              <ExternalBtnLink
                title={offer.title}
                key={offer.id}
                site={offer.site}
                content={
                  <OfferCard
                    title={offer.title}
                    description={offer.text}
                    loan_term={offer.loan_term}
                    amount={offer.amount}
                    interest_rate={offer.interest_rate}
                  />
                }
              />
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
              <ExternalBtnLink
                key={support.id}
                title={support.title}
                site={support.site}
                content={
                  <SupportCard
                    title={support.title}
                    text={support.text}
                    amount={support.amount}
                    is_actual={support.is_actual}
                    style={{ maxWidth: 400 }}
                  />
                }
              />
            ))}
          </Panel>
        ) : null}
      </Collapse>
    </>
  )
}

SpecialForYou.displayName = 'SpecialForYou'

export default SpecialForYou
