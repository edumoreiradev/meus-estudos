/*## Transformar notas escolares

Crie um algoritimo que trnsforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C.

* de 90 pra cima - A
* entre 80 - 89  - B
* entre 70 - 79  - C
* entre 60 * 69  - D
* menor que 60   - F

*/

/*
    let note = 94

    if (note >= 90 && note <= 100) {
        console.log('Nota A')

    } else if (note >= 80 && note <= 89) {

        console.log('Nota B')
    } else if (note >= 70 && note <= 79) {
        console.log('Nota C')
    } else if (note >= 60 && note <= 69) {
        console.log('Nota D')
    } else if (note < 60 && note >= 0){
        console.log('Nota F')
    } else {
        console.log('Nota inválida')
    }
*/


function getNote(note) {
    if (note >= 90 && note <= 100) {
        console.log('Nota A')

    } else if (note >= 80 && note <= 89) {

        console.log('Nota B')
    } else if (note >= 70 && note <= 79) {
        console.log('Nota C')
    } else if (note >= 60 && note <= 69) {
        console.log('Nota D')
    } else if (note < 60 && note >= 0){
        console.log('Nota F')
    } else {
        console.log('Nota inválida')
    }
    return note
}

console.log(getNote(95))
console.log(getNote(85))
console.log(getNote(75))
console.log(getNote(65))
console.log(getNote(55))
console.log(getNote(0))
console.log(getNote(-78))
console.log(getNote(102))
