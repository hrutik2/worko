import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../page/home'
import Signup from '../page/signup'
import Login from '../page/login'
import AddReferral from '../page/addReferal'


export const AllRoutes=()=>{
    return(
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/addReferral' element={<AddReferral/>}></Route>
        </Routes>
    )
}