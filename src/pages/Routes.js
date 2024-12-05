import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Frontend from './Frontend'
import Navbar from '../components/Header/Navbar'
import Dashboard from './Dashboard'
import PrimeFooter from '../components/Footer/PrimeFooter'
import Auth from './Auth'


export default function Index() {

  // const { isAuth } = useAuthContext()

  // console.log('isAuth in Routes', isAuth)

  return (
    <>
      <Navbar />
      {/* <Routes>
        <Route path='/*' element={<Frontend />} />
        <Route path='/auth/*' element={!isAuth ? <Auth /> : <Navigate to="/dashboard/products" />} />
        <Route path='/dashboard/*' element={<PrivateRoute Component={Dashboard} />} />
        <Route path='*' element={<h1>404</h1>} />
      </Routes> */}
      <Routes>
        <Route path='/*' element={<Frontend />} />
        <Route path='/auth/*' element={<Auth />} />
        <Route path='/dashboard/*' element={<Dashboard />} />
        <Route path='*' element={<h1>404</h1>} />
      </Routes>
      <PrimeFooter />
    </>
  )
}
