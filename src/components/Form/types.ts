import { UseFormReturn } from 'react-hook-form'

import { SignUpForm } from './Form'

export type FormProps = {
  formContext: UseFormReturn<SignUpForm, any>
}
