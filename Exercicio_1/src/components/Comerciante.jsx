import { useState } from "react"
import "./Comerciante.css"

function Comerciante() {
     
    const[resultado, setResultado] = useState()

    function Desconto(){

    let valor = Number(prompt("Digite o valor do produto:")) 
    let calculo 
    let resultado

        if(valor > 20){

            calculo = valor * 0.3
            resultado = calculo + valor
            setResultado(`${resultado}`)
        }

        else if(valor < 20){

            calculo = valor * 0.45
            resultado = calculo + valor
            setResultado(`${resultado}`)
        }

    }

  return (
    <div className="kk-containe">
      <h2>🤑Descubra o valor da venda🤑</h2>

      <button onClick={Desconto}>Verificar</button>

      Resultado: {resultado}
    </div>
  )
}

export default Comerciante
