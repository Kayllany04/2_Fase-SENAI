import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
let usuarioLogado = 'Gill Bates, dono da Sicromoft'

//let diadehoje = quarta 
const [diaDeHoje, setDiaDeHoje] = useState ('sexta')

    return(
        <GlobalContext.Provider value={{usuarioLogado, diaDeHoje, setDiaDeHoje}}>
            {children}
        </GlobalContext.Provider>
    )
}
