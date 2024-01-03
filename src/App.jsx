import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Contact from './pages/Contact'
import About from './pages/About'
import Error from './pages/Error'
import Login from './pages/Login'
import Signup from './pages/Signup'


function App() {
  
  return (
    <>
      
  <BrowserRouter>

      <Routes>

            <Route path='/home' element={<Home/>} />
            <Route path='/menu' element={<Menu/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='*' element={<Error/>} />
            
      </Routes>

  </BrowserRouter>
    
    </>
  )
}

export default App
