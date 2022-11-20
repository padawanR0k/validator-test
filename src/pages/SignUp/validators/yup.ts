import * as yup from 'yup'

const ID_MIN_MESSAGE = '5글자이상 입력해주세요'
const ID_REQUIRED_MESSAGE = '아이디를 입력해주세요'

const EMAIL_TYPE_MESSAGE = '이메일 형식이 아닙니다'

const PASSWORD_MIN_MESSAGE = '8글자 이상 입력해주세요'
const PASSWORD_MAX_MESSAGE = '32글자 이하로 입력해주세요'
const PASSWORD_REQUIRED_MESSAGE = '비밀번호를 입력해주세요'

const EMAIL_REQUIRED_MESSAGE = '이메일을 입력해주세요'

const PASSWORD_CONFIRM_MIN_MESSAGE = '8글자 이상 입력해주세요'
const PASSWORD_CONFIRM_MAX_MESSAGE = '32글자 이하로 입력해주세요'
const PASSWORD_CONFIRM_NOT_MATCHED_MESSAGE = '비밀번호가 일치하지 않습니다'
const PASSWORD_CONFIRM_REQUIRED_MESSAGE = '비밀번호를 한번 더 입력해주세요'

const PASSWORD_UPPERCASE_MESSAGE = '대문자를 포함해주세요'
const PASSWORD_LOWERCASE_MESSAGE = '소문자를 포함해주세요'
const PASSWORD_SPECIAL_CHAR_MESSAGE = '특수문자를 1개 이상 포함해주세요'

export const yupSchema = yup
  .object()
  .shape({
    id: yup.string().min(5, ID_MIN_MESSAGE).required(ID_REQUIRED_MESSAGE),
    email: yup
      .string()
      .email(EMAIL_TYPE_MESSAGE)
      .required(EMAIL_REQUIRED_MESSAGE),
    password: yup
      .string()
      .matches(/[A-Z]/, PASSWORD_UPPERCASE_MESSAGE)
      .matches(/[a-z]/, PASSWORD_LOWERCASE_MESSAGE)
      .matches(
        /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/,
        PASSWORD_SPECIAL_CHAR_MESSAGE
      )
      .min(8, PASSWORD_MIN_MESSAGE)
      .max(32, PASSWORD_MAX_MESSAGE)
      .required(PASSWORD_REQUIRED_MESSAGE),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref('password')], PASSWORD_CONFIRM_NOT_MATCHED_MESSAGE)
      .required(PASSWORD_CONFIRM_REQUIRED_MESSAGE),
  })
  .required()

/**
 * yup.ref 는 다른 프로퍼티를 참조할 때 사용한다.
 * matchs는 정규표현식을 사용할 수 있다.
 * 비밀번호를 검사할 때 한방 정규표현식을 사용할 수도 있지만, 위처럼 나눠서 작성도 가능하다.
 */
