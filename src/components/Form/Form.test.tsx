import { render, screen } from '~/utils/tests'

import { Form } from '.'

describe('<Form />', () => {
  it('renders', () => {
    render(<Form prop="form" />)

    expect(screen.getByRole('heading', { name: /form/i })).toBeInTheDocument()
  })
})
