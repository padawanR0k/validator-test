import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { beforeEach, vi } from 'vitest'

import { yupSchema } from '~/pages/SignUp/validators/yup'
import { render, screen, userEvent } from '~/utils/tests'

import { SignUpForm } from './Form'

import { Form } from '.'

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // Deprecated
    removeListener: vi.fn(), // Deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})

describe('<Form />', () => {
  beforeEach(() => {
    const FormContainer = () => {
      const formContext = useForm<SignUpForm>({
        resolver: yupResolver(yupSchema),
        mode: 'onChange',
      })
      return <Form formContext={formContext} />
    }

    render(<FormContainer />)
  })

  it('renders', () => {
    expect(screen.getByLabelText('id')).toBeInTheDocument()
  })

  it('아이디는 5글자 이상 입력하지 않으면 에러메시지가 노출된다..', async () => {
    const input = screen.getByLabelText('id')

    await userEvent.type(input, '홍길동')

    expect(screen.getByText(/5글자이상 입력해주세요/)).toBeInTheDocument()
  })

  it('이메일은 이메일 형식을 맞추지 않으면 에러메시지가 노출된다.', async () => {
    const input = screen.getByLabelText('email')

    await userEvent.type(input, 'asd2')

    expect(screen.getByText(/이메일 형식이 아닙니다/)).toBeInTheDocument()
  })

  it('비밀번호는 8글자 미만이면 에러메시지가 노출된다.', async () => {
    const input = screen.getByLabelText('password')

    await userEvent.type(input, 'a234A!7')

    expect(screen.getByText(/8글자 이상 입력해주세요/)).toBeInTheDocument()
  })

  it('비밀번호는 32글자 초과면 에러메시지가 노출된다.', async () => {
    const input = screen.getByLabelText('password')

    await userEvent.type(input, 'A!a4567890123456789012345678901234567890')

    expect(screen.getByText(/32글자 이하로 입력해주세요/)).toBeInTheDocument()
  })

  it('비밀번호는 소문자를 포함하지 않으면 에러메시지가 노출된다.', async () => {
    const input = screen.getByLabelText('password')

    await userEvent.type(input, '!A56789012')

    expect(screen.getByText(/소문자를 포함해주세요/)).toBeInTheDocument()
  })

  it('비밀번호는 대문자를 포함하지 않으면 에러메시지가 노출된다.', async () => {
    const input = screen.getByLabelText('password')

    await userEvent.type(input, 'a!456789012345')

    expect(screen.getByText(/대문자를 포함해주세요/)).toBeInTheDocument()
  })

  it('비밀번호는 특수문자를 포함하지 않으면 에러메시지가 노출된다.', async () => {
    const input = screen.getByLabelText('password')

    await userEvent.type(input, 'aA456789012345')

    expect(
      screen.getByText(/특수문자를 1개 이상 포함해주세요/)
    ).toBeInTheDocument()
  })
})
