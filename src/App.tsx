import { Route, Routes } from 'react-router-dom'
import { Layout } from './pages/auth/sign-in/layout'
import { SignIn } from './pages/auth/sign-in'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<SignIn/>}/>
      </Route>
    </Routes>
  )
}

export default App
