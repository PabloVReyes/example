import { Route, Routes } from 'react-router-dom'
import { SignIn } from './pages/auth/sign-in'
import { paths } from './paths'
import Layout from './pages/layout'
import Resumen from './pages/resumen'
import Clientes from './pages/clientes'
import Productos from './pages/productos'

function App() {
  return (
    <Routes>
      <Route path={paths.auth.signIn} element={<SignIn />} />
      <Route path={paths.home} element={<Layout/>}>
        <Route index element={<Resumen/>}/>
        <Route path={paths.clientes} element={<Clientes/>}/>
        <Route path={paths.productos} element={<Productos/>}/>
      </Route>
    </Routes>
  )
}

export default App
