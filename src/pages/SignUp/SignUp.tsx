import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import { SignUpForm } from '~/components/Form/Form'

import { Form } from '../../components/Form'

import { yupSchema } from './validators/yup'

export function SignUp() {
  const formContext = useForm<SignUpForm>({
    resolver: yupResolver(yupSchema),
    mode: 'onChange',
  })

  return <Form formContext={formContext} />
}
