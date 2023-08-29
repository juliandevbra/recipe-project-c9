import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate()

  return (
    <div>
        <h1>Bienvenido a mundo recetas</h1>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <button onClick={() => navigate(-1)}>⬅Back</button>
            <Link to='/'><h4 style={{margin: 10}}>Home </h4></Link>
            <Link to='/about'><h4 style={{margin: 10}}>About</h4></Link>
            <Link to='/contact'><h4 style={{margin: 10}}>Contact</h4></Link>
        </div>
        
        
    </div>
  )
}

export default Navbar