import { Badge, Col, Row } from 'antd'
import Link from 'next/link'
import React from 'react'

import { FetchMoreItemsComponent } from '@/components/FetchMoreItemsComponent'
import { PageWrapper } from '@/components/PageWrapper'
import { SupportCard } from '@/components/SupportCard'
import { Meta } from '@/layouts/Meta'
import type { SupportModelProps } from '@/models'
import { SupportModel } from '@/models'
import { Main } from '@/templates/Main'

const Model = SupportModel

const Supports = () => {
  return (
    <Main
      meta={
        <Meta title='Поддержка бизнеса' description='Мера поддержки бизнеса' />
      }
    >
      <PageWrapper
        title='Меры поддержки бизнеса'
        subTitle='Здесь собраны все доступные меры поддержки для вашего бизнеса'
      >
        <FetchMoreItemsComponent
          model={Model}
          renderItems={(rowData) => (
            <Row gutter={[20, 20]}>
              {rowData?.map((support: SupportModelProps) => (
                <Col key={support.id} xs={24} md={24}>
                  <Link target='_blank' href={support.site}>
                    <Badge.Ribbon
                      text={support.is_actual ? 'Актуально' : 'Не актуально'}
                      color={support.is_actual ? 'blue' : 'red'}
                    >
                      <SupportCard
                        title={support.title}
                        text={support.text}
                        amount={support.amount}
                        is_actual={support.is_actual}
                      />
                    </Badge.Ribbon>
                  </Link>
                </Col>
              ))}
            </Row>
          )}
        />
      </PageWrapper>
    </Main>
  )
}

export default Supports
