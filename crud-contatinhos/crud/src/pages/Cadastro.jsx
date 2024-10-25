import React, { useState, useContext } from 'react'
import Navbar from '../components/Navbar'
import { GlobalContext } from '../contexts/GlobalContext'
import './Cadastro.css'

function Cadastro() {
    const{contatinho, setcontatinho, contatinhos, setcontatinhos }= useContext(GlobalContext)
     const [inputNome, setInputNome] = useState('')

     function cadastrarcontatinho(){
    //          setcontatinho(inputNome)
             
    setcontatinhos([...contatinhos, inputNome])
    console.log(contatinhos);
     }


  return (
    <div>
       <Navbar />

      <h1>Cadastre Seu Contatinho</h1>

      <div className="input-container">
       <label htmlFor="">Nome:</label>
       <input type="text" 
       value={inputNome} 
       onChange={(event) => setInputNome(event.target.value
       )} />
       </div>

        {contatinho}
       <button onClick={cadastrarcontatinho}>Cadastrar contatinhos</button>

        <div className='contatinhos'>
            {contatinhos.map((c, index) => (
               <div className='card-contatinho' key={index}>
                   <p>{c}</p>
               </div>

            ))}
        </div>

    </div>
  )
}

export default Cadastro
