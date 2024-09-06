import { useState } from "react"
import "./Corrida.css"

function Corrida() {

    const[resultado, setResultado] = useState()

    function verificar() {

        let distancia = Number(prompt("Digite a distância (em quilômetros)"))
        let tempo 
        let tempoMN
        let tempoH
        let tempoD
        let tempoMses
        let velocidade = 300000

        // calculo do tempo ja convertendo de
        //  segundos para minutos
        tempo = ( distancia / velocidade)
        setResultado(`Distância aproximada : ${tempo}`)


    // converte de segundos para minutos
    if(tempo > 60){

       tempoMN = (tempo * 60)
       setResultado(`Distância aproximada: ${tempoMN}`)
    }
        
    // converte de minutos para horas
    else if(tempo >= 60 ){

        tempoH = (tempo / 60)
        setResultado(`Distância aproximada: ${tempoH}`)
    }

    // horas para dias
    else if( tempoH >= 24  ){

        tempoD = (tempoH / 24)
        setResultado(`Distância aproximada: ${tempoD}`)
    }

    else if(tempoD >= 30){

        tempoMses = tempoD * 30 
        setResultado(`Distância aproximada: ${tempoMses}`)
    }

    else if(tempoMses > 12){

        tempoAno = (tempoMses / 12)
           setResultado(`Distância aproximada: ${tempoAno}`)
    }
    }
  return (

    <div className="kk-containe">

      <h2>🏃🏾‍♀️Calcular a distância🏃🏾‍♂️</h2>
      <button onClick={verificar}>Verificar</button>
    
      Resultado: {resultado}
    </div>




  )
}

export default Corrida
