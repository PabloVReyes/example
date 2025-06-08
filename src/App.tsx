import { Route, Routes } from 'react-router-dom'
import { SignIn } from './pages/auth/sign-in'
import { paths } from './paths'
import Layout from './pages/layout'
import Resumen from './pages/resumen'

function App() {
  return (
    <Routes>
      <Route path={paths.auth.signIn} element={<SignIn />} />
      <Route path={paths.home} element={<Layout/>}>
        <Route index element={<Resumen/>}/>
      </Route>
    </Routes>
  )
}

export default App
