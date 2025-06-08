import { Route, Routes } from 'react-router-dom'
import { SignIn } from './pages/auth/sign-in'

function App() {
  return (
    <Routes>
      <Route path='/' element={<SignIn />} />
    </Routes>
  )
}

export default App
