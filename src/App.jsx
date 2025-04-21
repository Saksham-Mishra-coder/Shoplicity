import { useState } from 'react'
import Home from './pages/Home/Home'
import {Route, Routes,BrowserRouter} from 'react-router-dom'

import './App.css'
import Cart from './pages/cart/Cart'
import Product from './commponets/Product/Product'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
  

  return (
    <>
     <div>
      <BrowserRouter>
      <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/cart" element = {<Cart/>}/>
      <Route path = "/products" element = {<Product/>}/>
      <Route path = "/profile" element = {<Profile/>}/>
      <Route path = "/login" element = {<Login/>}/>
      <Route path = "/signup" element = {<Signup/>}/>
      </Routes>
      </BrowserRouter>
     </div>
    </>
  )
}

export default App
