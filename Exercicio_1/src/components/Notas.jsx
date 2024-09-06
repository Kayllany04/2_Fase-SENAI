import {useState } from "react"
import "./Notas.css"

function Notas() {

    const [resultado, setResultado] = useState()

    function notas(){
        let nota1 = Number(prompt("digite uma nota de 0 a 10"))
        let nota2 = Number(prompt("digite uma nota de 0 a 10"))
        let calculo = (nota1 + nota2)/2

          if(calculo > 9 || calculo <= 10){
            setResultado("parabens vc tirou um A")
          }
          else if(calculo > 7.5 || calculo <= 9){
            setResultado("parabens vc tirou um B")
          }
          else if(calculo > 6 || calculo <= 7.5){
            setResultado("parabens vc tirou um C")
          }
          else if(calculo > 4 || calculo <= 6){
            setResultado("parabens vc tirou um D")
          }
          else if(calculo > 0 || calculo <= 4){
            setResultado("parabens vc tirou um E")
          }
           
          }


  return (
    <div  className="kk-containe">
      <h2>Verifique que nota vc tirou</h2>
      <h2>Segue a tabela a seguir:
        (Entre ]9.0[ e [10.0]=A)
        (Entre ]7.5[ e [9.0]=B)
        (Entre ]6.0[ e [7.5]=C)
        (Entre ]4.0[ e [6.0]=D)
        (Entre [0.0] e [4.0]=E)
      </h2>

      <button onClick={notas}>verificar</button>



      Resultado: {resultado}
    </div>
  )
}

export default Notas
