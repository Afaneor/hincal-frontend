import {
  Button,
  Card,
  Checkbox,
  Col,
  Form,
  Input,
  notification,
  Row,
} from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import type { FCC } from 'src/types'

import { FormItem } from '@/components'
import type { FormErrorsHook } from '@/hooks/useFormErrors'
import { useFormErrors } from '@/hooks/useFormErrors'
import { Meta } from '@/layouts/Meta'
import type { LoginValuesTypes } from '@/services/auth'
import { useLogin } from '@/services/auth/hooks'
import { Main } from '@/templates/Main'

const Login: FCC = () => {
  const [loginForm] = Form.useForm()
  const { errors, setFormErrors } = useFormErrors() as FormErrorsHook
  const router = useRouter()

  const { mutate: login, isLoading: loginIsLoading }: any = useLogin()
  const handleLogin = (credentials: LoginValuesTypes) => {
    login(credentials, {
      onSuccess: () => {
        router.push('/calculator')
      },
      onError: (error: any) => {
        setFormErrors(error?.data)
        if (error?.data?.detail) {
          notification.error({
            message: error.data.detail,
          })
        }
      },
    })
  }
  const onFinishFailed = () => {
    //
  }
  return (
    <Main meta={<Meta title='Логин' description='' />}>
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
              form={loginForm}
              name='basic'
              layout='vertical'
              wrapperCol={{ span: 24 }}
              initialValues={{ remember: true }}
              onFinish={handleLogin}
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
                <Button
                  loading={loginIsLoading}
                  size='large'
                  block
                  type='primary'
                  htmlType='submit'
                >
                  Войти
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </Main>
  )
}

Login.displayName = 'Login'

export default Login
