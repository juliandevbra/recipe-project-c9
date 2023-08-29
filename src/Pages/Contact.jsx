import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {

    const navigate = useNavigate()

    const handleSubmit = () => {
        console.log('Enviando formulario')
        setTimeout(() => {
            console.log('Form enviado')
            navigate('/')
        }, 2000)
    }

  return (
    <div>
        <h3>Contactanos: </h3>
        <label >Mensaje:</label>
        <input type="text" />
        <label>Email:</label>
    <input type="text" />
    <button onClick={handleSubmit}>Enviar formulario</button>
    </div>
  )
}

export default Contact