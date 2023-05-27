import { Button, Card, Col, Form, Input, notification, Row } from 'antd'
import Link from 'next/link'
import React from 'react'
import type { FCC } from 'src/types'

import { FormItem } from '@/components'
import type { FormErrorsHook } from '@/hooks/useFormErrors'
import { useFormErrors } from '@/hooks/useFormErrors'
import { Meta } from '@/layouts/Meta'
import { Main } from '@/templates/Main'
import AuthServices from '@/services/auth/AuthServices'
import { useRouter } from 'next/router'

const Registration: FCC = () => {
  const { errors, setFormErrors } = useFormErrors() as FormErrorsHook
  const router = useRouter()

  const onFinish = (data) => {
    AuthServices.register(data)
      .then(() => {
        notification.success({
          message:
            'Вам отправлено сообщение на почту для подтвеждения регистрации',
          duration: 3,
        })
        router.push('/login')
      })
      .catch(({ data }: { data: Object }) => {
        setFormErrors(data)
      })
  }
  const onFinishFailed = () => {
    notification.error({
      message: 'Исправьте введенные данные',
      duration: 3,
    })
  }
  return (
    <Main meta={<Meta title='Регистрация' description='' />}>
      <Row justify='center' style={{ padding: '1% 0' }}>
        <Col xs={24} md={12}>
          <Card
            title='Регистрация'
            extra={<Link href='/login'>Вход</Link>}
            hoverable
          >
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
                    name='second_name'
                    errors={errors.secondName}
                  >
                    <Input size='large' />
                  </FormItem>
                </Col>
                <Col xs={24} md={8}>
                  <FormItem
                    label='Имя'
                    name='first_name'
                    errors={errors.first_name}
                  >
                    <Input size='large' />
                  </FormItem>
                </Col>
                <Col xs={24} md={8}>
                  <FormItem
                    label='Отчество'
                    name='last_name'
                    errors={errors.last_name}
                  >
                    <Input size='large' />
                  </FormItem>
                </Col>
              </Row>
              <FormItem
                label='ИНН (если регистрируетесь, как ИП или компания)'
                name='inn'
                wrapperCol={{ span: 12 }}
                errors={errors.inn}
              >
                <Input size='large' />
              </FormItem>
              <FormItem
                label='Электронная почта'
                name='email'
                wrapperCol={{ span: 12 }}
                rules={[
                  {
                    type: 'email',
                    message: 'Введите корректный адрес электронной почты',
                  },
                  { required: true, message: 'Пожалуйста, введите email' },
                ]}
                errors={errors.email}
              >
                <Input placeholder='name@example.ru' size='large' />
              </FormItem>
              <Row gutter={20}>
                <Col xs={24} md={12}>
                  <FormItem
                    label='Пароль'
                    name='password1'
                    rules={[
                      { required: true, message: 'Пожалуйста, введите пароль' },
                    ]}
                    errors={errors.password}
                    hasFeedback
                  >
                    <Input.Password
                      placeholder='Введите ваш пароль'
                      size='large'
                    />
                  </FormItem>
                </Col>
                <Col xs={24} md={12}>
                  <FormItem
                    label='Повторите пароль'
                    name='password2'
                    rules={[
                      { required: true, message: 'Пожалуйста, введите пароль' },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue('password1') === value) {
                            return Promise.resolve()
                          }
                          return Promise.reject(
                            new Error('Пароли должны совпадать!')
                          )
                        },
                      }),
                    ]}
                    errors={errors.password}
                  >
                    <Input.Password
                      placeholder='Введите ваш пароль'
                      size='large'
                    />
                  </FormItem>
                </Col>
              </Row>
              <Form.Item>
                <Button size='large' block type='primary' htmlType='submit'>
                  Зарегистрироваться
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </Main>
  )
}

Registration.displayName = 'Registration'

export default Registration
