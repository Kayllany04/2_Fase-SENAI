import React from 'react'
import Navbar from '../components/Navbar'

function NumPares713() {
 const[Numeros, inputNumeros]  = useState(0)
 
      function ver(){

        
      }


  return (
    <div>
      <h1>Exercício 7.13</h1>

      <input type="text"  
      value={inputNumeros}
      onChange={(event) => Numeros(event.target.value) }/>

      <input type="text"  
      value={inputNumeros}
      onChange={(event) => Numeros(event.target.value) }/>

       <button onClick={ver}>Checar</button>

    </div>
  )
}

export default NumPares713
