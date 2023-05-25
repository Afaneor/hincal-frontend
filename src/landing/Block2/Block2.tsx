import React from 'react'
import styles from './Block2.module.scss'
import { Button, Card, Col, Row, Typography } from 'antd'
import Link from 'next/link'
const { Title } = Typography

export const Block2 = () => {
  return (
    <div id='what' className={styles.container}>
      <Row style={{ paddingTop: '30px' }} justify={'center'}>
        <Title>Что вы получаете?</Title>
      </Row>
      <Row justify={'center'}>
        <Col xs={24} md={18}>
          <Row gutter={[20, 20]}>
            <Col xs={24} md={12}>
              <Card title='Быстрый расчет' className={'elevation'} hoverable>
                Введите требуемые параметры и получите результат. Расчет суммы
                инвестиций занимает несколько секунд.
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card
                title='Помощь в принятии решения'
                className={'elevation'}
                hoverable
              >
                Зная возможные траты, будет проще принять решение об
                инвестировании в развитии промышленного предприятия.
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card title='Аналитика' className={'elevation'} hoverable>
                Анализ данных поможет увидеть полную картину инвестирования. Вам
                не нужно самостоятельно искать информацию, всё это мы уже
                сделали за вас.
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card title='Стимул к развитию' className={'elevation'} hoverable>
                Узнайте как правильно инвестировать из первых уст. Возможно
                кто-то уже попробовал тоже, что и вы, и может дать более
                подробную информацию.
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card title='Отчёты' className={'elevation'} hoverable>
                Генерация персонализированного отчета на основе заданных
                параметров, ваших данных и опыта.
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card title='Актуальность' className={'elevation'} hoverable>
                Всегда свежая информация, собранная из открытых источников.
                Стоимость недвижимости и сопутствующих товаров и услуг.
              </Card>
            </Col>
            <Col span={24} style={{ textAlign: 'center', padding: '10px' }}>
              <Link href={'/calculator'}>
                <Button size={'large'} shape={'round'} type={'primary'}>
                  Рассчитать
                </Button>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

Block2.displayName = 'Block1'

export default Block2
