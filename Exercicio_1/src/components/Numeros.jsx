import {useState } from "react"
import './Numero.css'
// 5.29 - Copo meio cheio: Ler um número e informar
// se ele é positivo, 
// negativo ou nulo.

function Numeros() {

    const[resultado, setResultado] = useState()

function verificarndo(){
    
    let Numeros = Number(prompt("Digite um numero:"))
    
    if(Numeros > 0){
    setResultado("O numero é positivo.")
    }

    else if(Numeros < 0){
        setResultado("o numero é negativo.")
    }

    else{
     setResultado("o resultado é ZERO.")
    }

}

  return (
    <div className="Numero-containe">
      
    <h2>🎰Verificando os numeros:🎰</h2>

    <button onClick={ verificarndo}>Verificar</button>





       Resultado: {resultado}
    </div>
  )
}

export default Numeros
