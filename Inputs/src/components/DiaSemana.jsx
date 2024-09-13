import {useState} from 'react'
import './DiaSemana.css'


function DiaSemana() {

    const [DiaSemana, setInputDiaSemana] = useState(0)
    const [inputValue, setInputValue] = useState("")

    function  processardia(){

         const dia = parseInt(inputValue)

         switch (dia) {
                case 1:
                 setInputDiaSemana('Hoje é Domingo')
                
                break;

                case 2:
                    setInputDiaSemana('Hoje é segunda')
                
                break;

                case 3:
                    setInputDiaSemana('Hoje é terça')
                break;

                case 4:
                    setInputDiaSemana('Hoje é quarta')
                break;

                case 5:
                    setInputDiaSemana('Hoje é quinta')
                break;

                case 6:
                    setInputDiaSemana('Hoje é sexta')
                break;

                case 7:
                    setInputDiaSemana('Hoje é sabado')
                break;
         
            default: setInputDiaSemana("Número invalido")
         }
    }



  return (
     <div className='kk-container'>

      <h1>Dia da semana</h1>

      <input type="number" className='formulario'
                value={inputValue}
                onChange={(event) => {setInputValue(event.target.value)}} />

        <button onClick={processardia}>Procesar dia</button>

        {DiaSemana}
    </div>
  )
}

export default DiaSemana
