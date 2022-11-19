import { Form as AntdForm } from 'antd'
import Input from 'antd/lib/input/Input'
import {
  Controller,
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
} from 'react-hook-form'

import { Heading } from '~/components/Heading'

import * as S from './Form.styles'

import type { FormProps } from './types'
const { Item } = AntdForm

export function Form({ formContext }: FormProps) {
  const { control } = formContext
  const onValid: SubmitHandler<SignUpForm> = async (e) => {
    console.log('onValid', e)
  }
  const onError: SubmitErrorHandler<SignUpForm> = (e) => {
    console.log('onError', onError)
  }

  return (
    <FormProvider {...formContext}>
      <form onSubmit={formContext.handleSubmit(onValid, onError)}>
        <S.Page>
          <h1>SignUp</h1>

          <S.Container>
            <Controller
              name="id"
              control={control}
              render={({ field, formState }) => (
                <Item
                  label="Id"
                  validateStatus={formState.errors?.id ? 'error' : 'success'}
                  help={formState.errors?.id?.message || ''}
                >
                  <Input type="text" id="id" {...field} />
                </Item>
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({ field, formState }) => (
                <Item
                  label="email"
                  validateStatus={formState.errors?.email ? 'error' : 'success'}
                  help={formState.errors?.email?.message}
                >
                  <Input type="text" id="email" {...field} />
                </Item>
              )}
            />

            <Controller
              name="password"
              control={control}
              render={({ field, formState }) => (
                <Item
                  label="password"
                  validateStatus={
                    formState.errors?.password ? 'error' : 'success'
                  }
                  help={formState.errors?.password?.message}
                >
                  <Input type="password" id="password" {...field} />
                </Item>
              )}
            />

            <Controller
              name="passwordConfirm"
              control={control}
              render={({ field, formState }) => (
                <Item
                  label="passwordConfirm"
                  validateStatus={
                    formState.errors?.passwordConfirm ? 'error' : 'success'
                  }
                  help={formState.errors?.passwordConfirm?.message}
                >
                  <Input type="password" id="passwordConfirm" {...field} />
                </Item>
              )}
            />

            <button type="submit">submit</button>
          </S.Container>
        </S.Page>
      </form>
    </FormProvider>
  )
}

export type SignUpForm = {
  id: string
  password: string
  passwordConfirm: string
  email: string
}
