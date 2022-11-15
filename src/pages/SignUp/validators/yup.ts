import * as yup from 'yup'

export const yupSchema = yup
  .object()
  .shape({
    id: yup.number().required(),
    email: yup.string().email(),
    password: yup.string().required(),
    passwordConfirm: yup.string().required(),
  })
  .required()
