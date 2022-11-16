import { yupResolver } from '@hookform/resolvers/yup'
import { Form } from 'antd'
import Input from 'antd/lib/input/Input'
import { Controller, FormProvider, useForm } from 'react-hook-form'

import { Heading } from '~/components/Heading'

import * as S from './SignUp.styles'
import { yupSchema } from './validators/yup'

export function SignUp() {
  const formContext = useForm<SignUpForm>({
    resolver: yupResolver(yupSchema),
    mode: 'onChange',
  })

  const { control } = formContext

  return (
    <FormProvider {...formContext}>
      <S.Page>
        <Heading align="center">SignUp</Heading>

        <S.Container>
          <Controller
            name="id"
            control={control}
            render={({ field, formState }) => (
              <Form.Item
                label="Id"
                validateStatus={formState.errors?.id ? 'error' : 'success'}
                help={
                  formState.errors?.id ? '아이디는 글자만 입력가능합니다' : ''
                }
              >
                <Input type="text" id="id" {...field} />
              </Form.Item>
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field, formState }) => (
              <Form.Item
                label="email"
                validateStatus={formState.errors?.email ? 'error' : 'success'}
                help={formState.errors?.email?.message}
              >
                <Input type="text" id="email" {...field} />
              </Form.Item>
            )}
          />

          <Controller
            name="password"
            control={control}
            render={({ field, formState }) => (
              <Form.Item
                label="password"
                validateStatus={
                  formState.errors?.password ? 'error' : 'success'
                }
                help={formState.errors?.password?.message}
              >
                <Input type="password" id="password" {...field} />
              </Form.Item>
            )}
          />

          <Controller
            name="passwordConfirm"
            control={control}
            render={({ field, formState }) => (
              <Form.Item
                label="passwordConfirm"
                validateStatus={
                  formState.errors?.passwordConfirm ? 'error' : 'success'
                }
                help={formState.errors?.passwordConfirm?.message}
              >
                <Input type="password" id="passwordConfirm" {...field} />
              </Form.Item>
            )}
          />
        </S.Container>
      </S.Page>
    </FormProvider>
  )
}

type SignUpForm = {
  id: string
  password: string
  passwordConfirm: string
  email: string
}
