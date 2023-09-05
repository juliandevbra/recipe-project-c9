import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    const [lista, setLista] = useState([])
    const url = 'https://api.spoonacular.com/recipes/random?number=10&apiKey=68d481a0fbc340308fbf934f836ee8c6'

    useEffect(() =>{
        axios(url)
        .then(res => setLista(res.data.recipes))
    }, [])


  return (
    <div>
        {lista.map((receta) => {
            {console.log(receta.id)}    
            return <Link to={'/recipe/' + receta.id} key={receta.id}><li>{receta.title}</li></Link>
        })}
    </div>
  )
}

export default Home