import {useState} from 'react'
import './Enzo_valen.css'
function Enzo_valen() {

      const [inputAltura, setinputAltura] = useState()

     function calcular(){

        let enzo = 140
        let valentina = 150
        let anos = 0

        do{

          enzo +=3
          valentina  +=2
          anos +=1
 
        }while(enzo < valentina)
        // A função while nesse contexto serve para parar 
        // de somar apenas quando a valentina for menor que o enzo.

        setinputAltura(anos)
     }



    
  return (
    <div className='kk' >

      <h1>Enzo da academia e valentina</h1>

        <button onClick={calcular}>Verificar</button>
        Enzo sera mairo que valentina em: {inputAltura}
    </div>
  )
}

export default Enzo_valen
