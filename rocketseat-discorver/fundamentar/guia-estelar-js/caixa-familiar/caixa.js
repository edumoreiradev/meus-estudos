/*
sistema de gastos familiares

Crie um objeto que possuirá 2 propriedades, embas do tipo array

    * receitas: []
    * despesas: []
     
    
    * Agora, cria uma funcção que irá calcular o total de receitas e despesas e irá mostrar uma mensagme se a fampilia está com saldo positivo ou negativo, seguido do valor do saldo.
    
*/

let money = {
    receitas: [500.99, 1000, 750.45],
    despesas: [1500, 50, 400, 100, 500]
}

function sum(array) {
    let total = 0

    for(let value of array) {
        total += value
    }

    return total
}

function  calcMoney() {

    const calcReceitas = sum(money.receitas)
    const calcDespesas = sum(money.despesas)

    const total = calcReceitas - calcDespesas
    const itsOk = total >= 0

    let moneyText = "negativo"

    if(itsOk) {
        moneyText = "positivo"
    }

    console.log(`Seu saldo é ${moneyText}: ${total.toFixed(2)}R$`)
}

calcMoney()