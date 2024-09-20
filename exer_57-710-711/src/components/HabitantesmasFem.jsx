import {useState} from 'react'

function HabitantesmasFem() {

  const [inputGenero, setinputGenero] = useState()
  const [inputAltura, setinputAltura] = useState()


   function verificar(){




}



  return (

    <div className='kk-containe'>

      <h1>Habitantes Mas e Fem</h1>
      <label htmlFor="gene"> Genero: </label><input type="text" id='gene' 
            value={inputGenero}
            onChange={(event) => setinputGenero (event.target.value)}/> <br /><br />

      <label htmlFor="altu"> Altura: </label><input type="text" id='altu' 
          value={inputAltura}
          onChange={(event) => setinputAltura (event.target.value)}/><br /><br />

      <button onClick={verificar}>Verificar</button>

    </div>
  )
}

export default HabitantesmasFem

