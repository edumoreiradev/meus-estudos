//for...of

let name = 'Eduardo'
let names = ['joão', 'paulo', 'pedro']

for(let char of name) {
    console.log(char)
}

for(let name of names) {
    console.log(name)
}

//for...in loop em um objeto

let person = {
    nome: 'john',
    age: 55,
    weight: 90.6,
}

for(let property in person) {
    // console.log(person.nome)
    // console.log(person.age)
    // console.log(person.weight)
    console.log(property)
    console.log(person[property])
}
