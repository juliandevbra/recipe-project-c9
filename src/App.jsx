import { useState } from 'react'
import './App.css'
import CatFetch from './Components/CatFetch'
import DogFetch from './Components/DogFetch'

function App() {
  const [toggle, setToggle] = useState(true)
  return (
    <>
      <DogFetch toggle={toggle} />
      <CatFetch toggle={toggle} />
      <button onClick={() => setToggle(!toggle)}>Cambiar todo</button>
    </>
  )
}

export default App
