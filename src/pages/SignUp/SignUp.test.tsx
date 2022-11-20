import { MemoryRouter } from 'react-router-dom'

import { render, screen } from '~/utils/tests'

import { SignUp } from '.'

describe.skip('<SignUp />', () => {
  it('SignUp 페이지 렌더링', () => {
    render(
      <MemoryRouter>
        <SignUp />
      </MemoryRouter>
    )

    const title = screen.getByText('SignUp')

    expect(title).toBeInTheDocument()
  })
})
