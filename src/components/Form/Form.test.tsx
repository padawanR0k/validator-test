import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { vi } from 'vitest'

import { yupSchema } from '~/pages/SignUp/validators/yup'
import { render, screen } from '~/utils/tests'

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
  it('renders', () => {
    const FormContainer = () => {
      const formContext = useForm<SignUpForm>({
        resolver: yupResolver(yupSchema),
        mode: 'onChange',
      })
      return <Form formContext={formContext} />
    }

    render(<FormContainer />)

    expect(screen.getByTitle('Id')).toBeInTheDocument()
  })
})
