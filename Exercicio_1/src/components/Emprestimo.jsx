import { useState } from "react"
import "./Emprestimo.css"
function Emprestimo(){

    const[resultado, setResultado] = useState()

    function verificar(){

        let salario = Number(prompt("Digite o seu salario"))
         let prestacao = Number(prompt("Digite a prestacão"))
         let calculo1, calculo2
         calculo1 = 30/100
         calculo2 = salario * calculo1

         if(prestacao > calculo2){

        setResultado("voce não pode fazer o emprestimo")
         }

         else if(prestacao < calculo2){

            setResultado("voce  pode fazer o emprestimo")
             }
    }
  return (

    
    <div className='kk-containe'>
      
      <h2>💸Infome seu salario e o valor do emprestimo💰</h2>
     <button onClick={verificar}>verificar</button>
    
    resultado:{resultado}
    </div>
  )
}

export default Emprestimo