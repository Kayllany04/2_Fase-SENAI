import { useState } from 'react'
import './App.css'
import Maior from './components/Maior'
import Menor from './components/Menor'
import DiaSemana from './components/DiaSemana'


function App() {

  const [inputIdade, setInputIdade] = useState(0)
  const [maior, setMaior] = useState(false)
  const [menor, setMenor] = useState(false)


  function processarIdade(){
    if(inputIdade >= 18){
        // alert("Maior de idade")
        setMaior(true)
        setMenor(false)
    }
    else{
      setMenor(true)
      setMaior(false)
      // alert("Dimenó")
    }
  
  }
  return (
    <> 
  
      <DiaSemana />
       
      <div>
          <h1>Inputs</h1>

          Idade: 
            <input type="number" className='formulario'
                value={inputIdade}
                onChange={(event) => {setInputIdade(event.target.value)}}

            />

            <button onClick={processarIdade}>Procesar idade</button>
            {/* {inputIdade} */}
            {maior && <Maior/>}
            {menor && <Menor/>}
    </div>
    </>
  )
}

export default App
