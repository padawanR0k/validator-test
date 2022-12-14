import { Route, Routes } from 'react-router-dom'

import { Base } from '~/layouts/Base'
import { About } from '~/pages/About'
import { Home } from '~/pages/Home'
import { SignUp } from '~/pages/SignUp'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Base />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
    </Routes>
  )
}
