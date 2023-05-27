import { Button, Card, Col, Input, Row } from 'antd'
import React from 'react'
import type { FCC } from 'src/types'

import { HorizontalScrolling } from '@/components/HorizontalScrolling'
import { OffersList } from '@/components/OffersList'
import { PageWrapper } from '@/components/PageWrapper'
import { Meta } from '@/layouts/Meta'
import { OfferModel } from '@/models/Offer'
import { useFetchItems } from '@/services/base/hooks'
import { Main } from '@/templates/Main'

const Model = OfferModel
const Offers: FCC = () => {
  const { results } = useFetchItems(Model)

  return (
    <Main meta={<Meta title='Логин' description='' />}>
      <PageWrapper
        title='Выгодные предложения от партнеров'
        subTitle='Ищете партнера? Хотите найти самое выгодное предложение? Тогда вам будет полезно ознакомится с предложениями наших партнеров. Наш сервис позволит отыскать лучшее, что сейчас есть на рынке.'
      >
        <Row justify='center'>
          <Col span={24}>
            <HorizontalScrolling data={results} />
          </Col>
          <Col span={24} style={{ marginTop: 30 }}>
            <Card title='Хотите получать предложения одним из первых?'>
              <Row gutter={[20, 20]}>
                <Col md={13}>
                  <Input size='large' placeholder='example@site.ru' />
                </Col>
                <Col md={6}>
                  <Button size='large' type='primary'>
                    Подписаться на предложения
                  </Button>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col xs={24} md={24}>
            <OffersList model={Model} />
          </Col>
        </Row>
      </PageWrapper>
    </Main>
  )
}

Offers.displayName = 'Offers'

export default Offers
