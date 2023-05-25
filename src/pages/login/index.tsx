import { Button, Card, Checkbox, Col, Form, Input, Row } from 'antd'
import Link from 'next/link'
import React from 'react'
import type { FCC } from 'src/types'

import { FormItem } from '@/components'
import type { FormErrorsHook } from '@/hooks/useFormErrors'
import { useFormErrors } from '@/hooks/useFormErrors'

const Login: FCC = () => {
  const { errors } = useFormErrors() as FormErrorsHook

  const onFinish = () => {
    //
  }
  const onFinishFailed = () => {
    //
  }
  return (
    <Row justify='center' style={{ padding: '1% 0' }}>
      <Col xs={24} md={8}>
        <Card
          title='Авторизация'
          extra={
            <Col xs={8}>
              <Link href='/registration'>Зарегистрироваться?</Link>
            </Col>
          }
          hoverable
        >
          <Form
            name='basic'
            layout='vertical'
            wrapperCol={{ span: 24 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'
          >
            <FormItem
              label='Электронная почта'
              name='email'
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
              label='Пароль'
              name='password'
              rules={[
                { required: true, message: 'Пожалуйста, введите пароль' },
              ]}
              errors={errors.password}
            >
              <Input.Password placeholder='Введите ваш пароль' size='large' />
            </FormItem>

            <Form.Item
              name='remember'
              valuePropName='checked'
              wrapperCol={{ offset: 0, span: 16 }}
            >
              <Checkbox>Запомнить меня</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button size='large' block type='primary' htmlType='submit'>
                Войти
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  )
}

Login.displayName = 'Login'

export default Login
