import { Alert, Button, Card, Col, Input, Row } from 'antd'
import React, { useState } from 'react'
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
  const [isSubscribe, setIsSubscribe] = useState(false)
  const { results } = useFetchItems(Model)

  return (
    <Main meta={<Meta title='Предложения от партнеров' description='' />}>
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
                  {!isSubscribe ? (
                    <Input size='large' placeholder='example@site.ru' />
                  ) : (
                    <Alert
                      type='info'
                      message='Вы успешно подписались на партнерскую рассылку'
                    />
                  )}
                </Col>
                <Col md={6}>
                  {!isSubscribe ? (
                    <Button
                      size='large'
                      type='primary'
                      onClick={() => setIsSubscribe(true)}
                    >
                      Подписаться на предложения
                    </Button>
                  ) : null}
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
