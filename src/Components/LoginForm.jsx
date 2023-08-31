import React from 'react'

const LoginForm = ({handleClick}) => {
  return (
    <div>
        <h1>Debe loguearse antes de continuar:</h1>
        <input role='email' type="email" />
        <input data-testid='password' type="password" />
        <button onClick={handleClick}>Enviar</button>
    </div>
  )
}

export default LoginForm