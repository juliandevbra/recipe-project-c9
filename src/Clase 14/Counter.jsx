import React from 'react'
import { useState } from 'react'
import { useReducer } from 'react'

const reducer = (state, action) => {
    switch(action.type) {
        case 'increment':
            return {count: state.count + 1}
        case 'decrement':
            return {count: state.count - 1}
        case 'reset':
            return {count: 0}
        case 'random':
            return {count: action.payload}
        default: 
            throw new Error()
    }
}

const initialState = {count: 0}

const Counter = () => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const [number, setNumber] = useState(0)
  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        <button onClick={() => dispatch({type: 'increment'})}>+</button>
        <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        <input type="number" onChange={(e) => setNumber(e.target.value)} />
        <button onClick={() => dispatch({type: 'random', payload: parseInt(number)})}>{number}</button>
    </div>
  )
}

export default Counter