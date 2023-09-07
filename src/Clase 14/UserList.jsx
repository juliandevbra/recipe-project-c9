import React from 'react'
import { useReducer } from 'react'
import { useState } from 'react'


const initialState = {
    users: [
      { id: 1, userName: "Gerardo", email: "gerar@gmail.com" },
      { id: 2, userName: "Magdalena", email: "Magda@gmail.com" },
      { id: 3, userName: "Lucia", email: "lu-cia@gmail.com" },
    ]
  }

  const reducer = (state, action) => {
      switch (action.type) {
        case 'ADD_USER':
            return {users: [...state.users, action.payload]}
        default:
            throw new Error()
      }
  }
  

const UserList = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const [newUser, setNewUser] = useState({
        id: '',
        userName: '',
        email: ''
    })

    const handleChange = (e) => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({type: 'ADD_USER', payload: newUser})
    }
    console.log(state)
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input type="number" name="id" onChange={handleChange}/>
        <input type="text" name="userName" onChange={handleChange}/>
        <input type="text" name="email" onChange={handleChange}/>
        <button>Submit</button>
      </form>
        {state.users.map(user => <li>id: {user.id} - nombre: {user.userName} - email: {user.email}</li>)}
    </div>
  )
}

export default UserList