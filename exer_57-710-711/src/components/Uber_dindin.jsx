import { useState } from 'react'
import'./Uber.css'

function Uber_dindin() {

    const [ValorFinal, setValorFinal] = useState()
    const [inputValue, setInputValue] = useState()

 function calcularDiarias(){

    let dias = parseInt(inputValue)
    let desconto = 25/100
    let total
    let valor
    let pagar

    if (dias <= 5){

        total = (dias * 100)
        valor = (total * desconto)
        pagar = (total - valor) + 150

        setValorFinal(pagar)
    }   

    else if (dias >= 6 || dias <= 10){

        total = (dias * 100)
        valor = (total * desconto)
        pagar = (total - valor) + 150

        setValorFinal(pagar)
    }

    else if (dias > 10){

        total = (dias * 100)
        valor = (total * desconto)
        pagar = (total - valor) + 150

        setValorFinal(pagar)
    }
}
        return (
        <div className='kk-containe'>

        <h2>Quantos dias vc ira ficar ?</h2>
        Dia hospedado(a)<input type='Number'
            value={inputValue}
            onChange={(event) => setInputValue (event.target.value)}/>
            <button onClick={calcularDiarias}>valor final</button>
        <br/>
      valor a ser pago:{ValorFinal}

        </div>
  )
}

export default Uber_dindin

// 5.7// Nosso amigo Mano Juca ganhou tanto dinheiro no Uber que resolveu 
// tirar férias. Sem destino, sem regras, vida loka, lobo solitário, sem 
// destino, um dia em cada lugar, sem dia pra voltar, até o dinheiro 
// acabar...
// Logo nos primeiros dias ele encontrou um paraíso e resolveu quebrar sua 
// única regra e ficar alguns dias por ali. Encontrou um albergue meio bom
// e fez check in, mas não conseguiu entender de forma alguma como o hotel 
// calculava o valor da conta. Ele é meio burro, vocês sabem...

// O albergue utilizas faixas de preço de acordo com o número de diárias:

// Até 5 diárias, o preço por diária é R$100,00;
// De 6 a 10 diárias, R$90,00 por dia;
// A partir de 11 dias, sai R$80,00 por dia;

// Outros fatos relevantes para determinar o valor da conta:
// - Ele acabou ganhando um desconto a mais de 10% do valor total porque 
// teve um “envolvimento emocional” com a moça que trabalha no balcão;

// - Quando ele abriu a carteira pra pagar, a moça viu que ele tem a 
// carteirinha da Associação dos motoristas do Uber de Palhoça, entidade 
// com a qual o albergue tem convênio, e aplicou mais 15% (do valor total)
// de desconto;
// - Ele se passou e vai pagar multa de R$150 por danos materiais.

// Criar um programa que lê o número de dias que ele vai ficar no albergue 
// e apresente o valor final da conta e sua composição (os detalhes, 
// pagamentos, descontos...);

