import React, { useState } from 'react'
import PainelAdm from '../components/PainelAdm'
import './Render.css'
import Produtos18 from '../components/Produtos18'
import UsuarioLogado from '../components/UsuarioLogado'
import Login from '../components/Login'

function Render() {

const [adm, setAdm] = useState(true)
const [idade, setIdade] = useState(0)
const [usuario, setUsuario] = useState(false)

  return (
    <div>

      <h1>Renderização Condicionais</h1>

      <div className='kk-container'>
        <button onClick={ () => {setAdm(true)}}>adm</button>
        <button onClick={ () => {setAdm(false)}}>oreiasseca</button>
             {adm && <PainelAdm />}
      </div>

      <div className='kk-container'>

      <button onClick={ () => {setIdade(idade+1)}}>+</button>
        {idade}
        <button onClick={ () => {setIdade(idade-1)}}>-</button>

        {idade >= 18 && <Produtos18 />}
      </div>

      <div className='kk-container'>
      <button onClick={ () => {setUsuario(true)}}>logar</button>
      <button onClick={ () => {setUsuario(false)}}>10Logar</button>
      { usuario ? <UsuarioLogado /> : <Login />}
       </div>

    </div>
  )
}

export default Render
