/* Celsius em fahrenheit

    Crie uma função que receba uma string rm cellsius ou fahrenheit e faça a transformção de uma unidade para outra

    C = (F - 32) * 5/9
    F = C * 9/5 + 32

*/

//MINHA RESOLUÇÃO

let t = 30
let text = "celsius"
let convertFahre = t * 9/5 + 32
let convertCelsius = (t - 32) * 5/9

function temperature() {
    

    if (t = Number && text == "celsius") {
        t = convertFahre
    } else if (t = Number && text == "fahrenheit") {
        t = convertCelsius
    }

    console.log(t.toFixed(2))
    return t
    
}

console.log(`Sua conversão deu `,temperature(t),'°')

//RESOLUÇÃO DO PSOR

function transformDegree(degree) {
    const celciusExists = degree.toUpperCase().includes('C')
    const fahreExists = degree.toUpperCase().includes('F')

    //fluxo de erro
    if(!celciusExists && !fahreExists) {
        throw new Error('grau não identificado')

    }

    //fluxo ideal F => C
    let updatedDegree = degree.toUpperCase().replace("F", "")
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSign = 'C°'

    //fluxo alternativo C => F
    if (celciusExists ) {
        updatedDegree = degree.toUpperCase().replace("C", "")
        formula = celcius => celcius * 9/5 + 32
        degreeSign = 'F°'

    }


    return formula(updatedDegree) + degreeSign

}

try {
    console.log(transformDegree('50F'))
    console.log(transformDegree('10C'))
    //transformDegree('50Z')
} catch (error){
    console.log(error.message)
}