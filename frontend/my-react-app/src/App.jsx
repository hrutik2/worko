import { useEffect, useState } from 'react'
import AddReferral from './page/addReferal'
import Login from './page/login'
import Signup from './page/signup'
import { Navbar } from './component/Navbar'
import { AllRoutes } from './component/AllRoutes'
import { Test } from './component/test'


function App() {
 const[show,setshow]=useState(true)



  return (
    <div>
      
     <Test />
    

    </div>
  )
}

export default App
