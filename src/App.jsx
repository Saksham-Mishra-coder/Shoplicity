import { useState } from 'react'
import Home from './pages/Home/Home'
import {Route, Routes,BrowserRouter} from 'react-router-dom'

import './App.css'
import Cart from './pages/cart/Cart'

function App() {
  

  return (
    <>
     <div>
      <BrowserRouter>
      <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/cart" element = {<Cart/>}/>
      </Routes>
      </BrowserRouter>
     </div>
    </>
  )
}

export default App
