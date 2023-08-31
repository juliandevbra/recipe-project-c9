import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import LoginForm from './Components/LoginForm'
import Navbar from './Components/Navbar'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Detalle from './Pages/Detalle'
import Home from './Pages/Home'

function App() {
  const handleClick = () => {
    console.log('se ejecuta')
  }
  return (
    <>
    <LoginForm handleClick={handleClick}/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='/recipe/:id' element={<Detalle/>}/>
      </Routes>
    </>
  )
}

export default App
