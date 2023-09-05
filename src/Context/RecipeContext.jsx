import { createContext, useContext, useState } from "react";

const RecipeStates = createContext()

const RecipeContext = ({children}) => {
    const [favs, setFavs] = useState([])

    return(
        <RecipeStates.Provider value={{favs, setFavs}}>
            {children}
        </RecipeStates.Provider>
    )
}

export default RecipeContext

export const useRecipeStates = () => useContext(RecipeStates)