import * as yup from 'yup'

export const yupSchema = yup
  .object()
  .shape({
    id: yup.string().min(5).required(),
    email: yup.string().email(),
    password: yup
      .string()
      .matches(/[A-Z]/)
      .matches(/[a-z]/)
      .matches(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/)
      .min(8)
      .max(32)
      .required(),
    passwordConfirm: yup
      .string()
      .min(8)
      .max(32)
      .oneOf([yup.ref('password')])
      .required(),
  })
  .required()

/**
 * yup.ref 는 다른 프로퍼티를 참조할 때 사용한다.
 * matchs는 정규표현식을 사용할 수 있다.
 * 비밀번호를 검사할 때 한방 정규표현식을 사용할 수도 있지만, 위처럼 나눠서 작성도 가능하다.
 */
