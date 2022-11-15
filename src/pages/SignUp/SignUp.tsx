import { yupResolver } from '@hookform/resolvers/yup'
import Input from 'antd/lib/input/Input'
import { FormProvider, useForm } from 'react-hook-form'

import { Heading } from '~/components/Heading'

import * as S from './SignUp.styles'
import { yupSchema } from './validators/yup'

export function SignUp() {
  const formContext = useForm<SignUpForm>({
    resolver: yupResolver(yupSchema),
  })

  return (
    <FormProvider {...formContext}>
      <S.Page>
        <Heading align="center">SignUp</Heading>

        <S.Container>
          <Input type="text" id="id" />
          <Input type="password" id="password" />
          <Input type="password" id="passwordConfirm" />
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
