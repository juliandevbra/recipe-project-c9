import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Context from './Clase 13/Context'
import LoboEstepario from './Clase 13/LoboEstepario'
import ParentComponent from './Clase 13/ParentComponent'
import LoginForm from './Components/LoginForm'
import Navbar from './Components/Navbar'
import RecipeContext from './Context/RecipeContext'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Detalle from './Pages/Detalle'
import Home from './Pages/Home'

function App() {


  return (
    <>
      {/* <Context>
        <ParentComponent />
        <LoboEstepario />
      </Context> */}
      <RecipeContext>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='/recipe/:id' element={<Detalle/>}/>
        </Routes>
      </RecipeContext>
    </>
  )
}

export default App
