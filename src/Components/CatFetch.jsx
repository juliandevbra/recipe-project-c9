import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const CatFetch = ({toggle}) => {
    const [gatito, setGatito] = useState({})
    const [state, setState] = useState(true)
    const url = 'https://api.thecatapi.com/v1/images/search'


    useEffect(() => {
        // axios(url)
        // .then(res => {
        //     console.log(res.data[0])
        //     setGatito(res.data[0])
        // })

        const axiosGatito = async () => {
            try {
                let res = await axios(url)
                console.log(res.data[0])
                setGatito(res.data[0])
            } catch(err) {
                console.log(err)
            }
        }
        axiosGatito()

    }, [toggle, state])
   


  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
        <img src={gatito.url} width={400} alt="" />
        <button onClick={() => setState(!state)}>Cambiar gatito</button>
    </div>
  )
}

export default CatFetch