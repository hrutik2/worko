import { useState } from 'react'
import AddReferral from './page/addReferal'
import Login from './page/login'
import Signup from './page/signup'
import { Navbar } from './component/Navbar'
import { AllRoutes } from './component/AllRoutes'


function App() {
 

  return (
    <div>
     <Navbar/>
     <AllRoutes/>
    </div>
  )
}

export default App
