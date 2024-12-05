import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserAllProducts from './UserAllProducts'
export default function Dashboard() {
  return (
    <Routes>
      <Route path='userAllProducts' element={UserAllProducts}/>
        <Route path='*' element={<h1>404 page not found</h1>}/>

    </Routes>
  )
}
