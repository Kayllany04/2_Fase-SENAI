import{ useState  } from 'react'
import Home from './pages/Home'
import './App.css'
import NaoSei from './pages/NaoSei'
import Contato from './pages/Contato'
import Render from './pages/Render'


function App() {

  const[pagina, setPagina] = useState(<Home />)

  function mostraeHome(){
  setPagina(<Home />)

  }
  return (
    <>
    <nav>

    {/* primeira fomar de intercalação entre pagisnas */}
      <button onClick={mostraeHome}>Home</button>
      {/* segunda fomar de intercalação entre pagisnas */}
      <button onClick={ () =>{setPagina(<Contato />)} }>Contato</button>
      <button onClick={ () =>{setPagina(<NaoSei />)} }>Naosei</button>
      <button onClick={ () =>{setPagina(<Render />)} }>Render</button>
    </nav>
     {pagina}
    </>
  )
}

export default App
