import React, { useState } from 'react'
import Navbar from '../components/Navbar'

function Numeros712() {

const[inputNumero, setInpuntNumero] = useState('')
const[contagem, setcontagem] = useState(0)
const[mostrarresultado, setmostrarresultado] = useState(false)

function lerNumero(){
  
    if(inputNumero > 100 && inputNumero < 200)
    //   alert("Tem que contar esse")
setcontagem(contagem +1)
}

function RenderizarRsultado() {

    setmostrarresultado (true)
}

  return (
    <div>
        <Navbar/>
      <h1>Exercício 7.12</h1>
      <input type="text"
          value={inputNumero}
          onChange={(event) => setInpuntNumero(event.target.value) }/>

       
      <button onClick={lerNumero}>Ler</button>
      <button onClick={RenderizarRsultado}>Resultados</button>

             {mostrarresultado && 

                <div>
                <p>Números na faixa 100 a 200:{contagem}</p> 

                </div>
           }
    </div>
  )
}

export default Numeros712
