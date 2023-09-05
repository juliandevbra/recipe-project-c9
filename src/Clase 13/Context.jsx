import { createContext, useContext, useState } from "react";

export const GlobalStates = createContext()

const Context = ({children}) => {
    const [salario, setSalario] = useState(150000)
    const [total, setTotal] = useState(0)

    return (
        <GlobalStates.Provider value={{salario, setSalario, total, setTotal}}>
            {children}
        </GlobalStates.Provider>
    )
}

export default Context;

export const useGlobalStates = () => useContext(GlobalStates)