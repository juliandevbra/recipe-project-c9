import React from 'react'
import { useGlobalStates } from './Context'
import lobo from './lobo.png'

const LoboEstepario = () => {
  const {salario, total} = useGlobalStates()
  return (
    <div className='lobo-estepario'>
        <img className='lobo' src={lobo} alt='lobo'/>
        <h3>Total: {salario*6}</h3>
        {console.log('LoboEstepario')}
        <h1>{total}</h1>
    </div>
  )
} 

export default LoboEstepario