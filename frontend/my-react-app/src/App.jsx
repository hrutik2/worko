import { useState } from 'react'
import AddReferral from './page/addReferal'
import Login from './page/login'
import Home from './page/home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Home />
      <Login />
      <AddReferral />
    </>
  )
}

export default App
