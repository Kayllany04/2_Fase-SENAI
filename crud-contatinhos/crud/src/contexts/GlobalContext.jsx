import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
let usuarioLogado = 'Gill Bates'

const[contatinho, setcontatinho] = useState('')
const[contatinhos, setcontatinhos] = useState([])

    return(
        <GlobalContext.Provider value={{
            
            usuarioLogado, 
            contatinho, 
            setcontatinho,
            contatinhos,
            setcontatinhos,

            }}>
            
            
            {children}
        </GlobalContext.Provider>
    )
}
