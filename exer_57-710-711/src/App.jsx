import { useState } from 'react'
import './App.css'
import Uber_dindin from './components/Uber_dindin'
import HabitantesmasFem from './components/HabitantesmasFem'
import Enzo_valen from './components/Enzo_valen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
         < Enzo_valen/>
       < HabitantesmasFem/>
       <Uber_dindin /> 
      
     </>
   
  )
}

export default App
