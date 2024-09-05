import { useState } from "react"
import './Media.css'
function Media() {

       const [resultado, setResultado] = useState()

       function calcularMedia(){

        let nota1 = Number(prompt("Digite o primeiro numero:"))
        let nota2 = Number(prompt("Digite a segunda numero:"))
        let media=(nota1+nota2)/2
        setResultado(media)
       }

    return (
    <div className="Media-Container">
      <h2>Exercício para calcular a media de 2 números</h2> 
        <button onClick={calcularMedia}>calcular</button>
        
        <div>Média: {resultado} </div>

    </div>
  )
}

export default Media
