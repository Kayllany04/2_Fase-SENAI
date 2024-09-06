import { useState } from "react" 
import './Par_Positivo.css'
// Dois copos meio cheios: Faça um programa para ler um número e 
// imprimir uma mensagem dizendo se o mesmo é par e positivo ao mesmo 
// tempo.

function Par_Positivo() {

    const[resultado, setResultado] = useState()

    function verificarndo(){

     let numero = Number(prompt("Digite um numero:"))

    
     if(numero % 2 === 0){
     setResultado("O numero é par e positivo")

     }

     else{
        setResultado("O numero não é par e positivo")
     }

    }

  return (
    <div className="Positivo-containe">
       <h2>Verificando os numeros par e positivo:</h2>

 <button onClick={ verificarndo}>Verificar</button>

   Resultado: {resultado}
    </div>
  )
}

export default Par_Positivo
