import { useState } from 'react'
import Header from './Header'
import Home from './Home'
import SignUp from './SignUp/SignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
    </>
  )
}

export default App
