import React from 'react'
import { useState, useEffect } from 'react'

const DogFetch = ({toggle}) => {
    const [perrito, setPerrito] = useState({})
    const url = 'https://dog.ceo/api/breeds/image/random'
    
    const fetchPerrito = () => {
        fetch(url)
        .then((response) => {
            return response.json()
        }).then((data) => {
            // console.log(data)
            setPerrito(data)
        })
        .catch((err) => console.log(err))
    }

    useEffect(fetchPerrito, [toggle])
    
    

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
        <img src={perrito.message} width={400} alt="" />
        <button onClick={fetchPerrito}>Cambiar perrito</button>
    </div>
  )
}

export default DogFetch