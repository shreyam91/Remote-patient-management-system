import React from 'react'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Service from '../pages/Service'
import Doctor from '../pages/Doctor'
import Contact from '../pages/Contact'
import DoctorDetails from '../pages/DoctorDetails'

import {BrowserRouter , Routes , Route} from 'react-router-dom'

const Router = () => {
  return <Routes>
    <Route path ='/' element={<Home />} />
    <Route path ='/home' element={<Home />} />
    <Route path ='/login' element={<Login />} />
    <Route path ='/contact' element={<Contact />} />
    <Route path ='/doctor' element={<Doctor />} />
    <Route path ='/doctordetail' element={<DoctorDetails />} />
    <Route path ='/service' element={<Service />} />
    <Route path ='/register' element={<Register />} />
  </Routes>
}

export default Router
