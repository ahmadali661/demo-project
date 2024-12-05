import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from "./Home"
import About from "./About"
import Products from './Products'
import AllItems from './AllItems'
import Order from './Order'
export default function Frontend() {
  return (
    <Routes>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='products' element={<Products/>}/> 
        <Route path='allItems' element={<AllItems/>}/> 
        <Route path='order' element={<Order/>}/> 
        <Route path='*' element={<h1>404 page not found</h1>}/>

    </Routes>
  )
}
