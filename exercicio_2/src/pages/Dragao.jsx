import { GlobalContext } from '../contexts/GlobalContext'
import Navbar from '../components/Navbar'
import { useContext } from 'react'

function Dragao() {

    const {diaDeHoje} = useContext(GlobalContext)

    function trocardia(){

        diaDeHoje = prompt('Que dia é hj? ')
    }


      return (
    <div>
        <Navbar/>
        <h1>Dragões</h1>
        <p>Pq eles são legalzinho, menos no dia {diaDeHoje}.</p>
        <button onClick={trocardia}></button>
    </div>
  )
}

export default Dragao
