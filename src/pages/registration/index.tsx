import { Button, Card, Col, Form, Input, Row } from 'antd'
import Link from 'next/link'
import React from 'react'
import type { FCC } from 'src/types'

import { FormItem } from '@/components'
import type { FormErrorsHook } from '@/hooks/useFormErrors'
import { useFormErrors } from '@/hooks/useFormErrors'

const Registration: FCC = () => {
  const { errors } = useFormErrors() as FormErrorsHook

  const onFinish = () => {
    //
  }
  const onFinishFailed = () => {
    //
  }
  return (
    <Row justify='center'>
      <Col xs={24} md={24}>
        <Card title='Регистрация' extra={<Link href='/login'>Войти</Link>}>
          <Form
            layout='vertical'
            wrapperCol={{ span: 24 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'
          >
            <Row justify='space-between' gutter={20}>
              <Col xs={24} md={8}>
                <FormItem
                  label='Фамилия'
                  name='secondName'
                  errors={errors.secondName}
                >
                  <Input size='large' />
                </FormItem>
              </Col>
              <Col xs={24} md={8}>
                <FormItem
                  label='Иия'
                  name='firstName'
                  errors={errors.firstName}
                >
                  <Input size='large' />
                </FormItem>
              </Col>
              <Col xs={24} md={8}>
                <FormItem
                  label='Отчество'
                  name='lastName'
                  errors={errors.lastName}
                >
                  <Input size='large' />
                </FormItem>
              </Col>
            </Row>
            <FormItem
              label='Электронная почта'
              name='email'
              wrapperCol={{ span: 12 }}
              rules={[
                {
                  type: 'email',
                  message: 'Введите корректный адрес электронной почты',
                },
              ]}
              errors={errors.email}
            >
              <Input placeholder='name@example.ru' size='large' />
            </FormItem>
            <FormItem
              label='Наименование организации'
              name='companyName'
              wrapperCol={{ span: 24 }}
              errors={errors.companyName}
            >
              <Input size='large' />
            </FormItem>
            <FormItem
              label='ИНН'
              name='inn'
              wrapperCol={{ span: 12 }}
              errors={errors.inn}
            >
              <Input size='large' />
            </FormItem>
            <Row justify='space-between' gutter={20}>
              <Col xs={24} md={8}>
                <FormItem
                  label='Страна'
                  name='country'
                  wrapperCol={{ span: 24 }}
                  errors={errors.country}
                >
                  <Input size='large' />
                </FormItem>
              </Col>
              <Col xs={24} md={8}>
                <FormItem
                  label='Город'
                  name='city'
                  wrapperCol={{ span: 24 }}
                  errors={errors.city}
                >
                  <Input size='large' />
                </FormItem>
              </Col>
              <Col xs={24} md={8}>
                <FormItem
                  label='Должность'
                  name='staffPosition'
                  wrapperCol={{ span: 24 }}
                  errors={errors.staffPosition}
                >
                  <Input size='large' />
                </FormItem>
              </Col>
            </Row>
            <FormItem
              label='Пароль'
              name='password'
              wrapperCol={{ span: 12 }}
              rules={[
                { required: true, message: 'Пожалуйста, введите пароль' },
              ]}
              errors={errors.password}
            >
              <Input.Password placeholder='Введите ваш пароль' size='large' />
            </FormItem>
            <FormItem
              label='Повторите пароль'
              name='password2'
              wrapperCol={{ span: 12 }}
              rules={[
                { required: true, message: 'Пожалуйста, введите пароль' },
              ]}
              errors={errors.password}
            >
              <Input.Password placeholder='Введите ваш пароль' size='large' />
            </FormItem>

            <Form.Item>
              <Button size='large' block type='primary' htmlType='submit'>
                Зарегистрироваться
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  )
}

Registration.displayName = 'Registration'

export default Registration
