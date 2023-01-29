//transformar string em numbero
let string = "123"
Number(string)
console.log(string)


//contar quantas letras há em uma string ou número
let word = "paralelepipedo"
console.log(word.length)

let number = 123456789
console.log(String(number).length)


//mudar de ponto pra virgula e / cortar caracteres depois da virgula
let number2 = 12345.54321
console.log(number2.toFixed(2).replace(".",","))


//minusculo em maiusculo
let word2 = "Programar é poggers"
console.log(word2.toUpperCase())

let = word3 = "PROGRAMAR É POGGERS"
console.log(word3.toLowerCase())


//arrey em texto e outras coisas
let phrase = "Eu quero coxinha agora, to com fome!"
let myArray = phrase.split(" ")
console.log(myArray)

let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore.toLowerCase())


//verificar se existe a palavra
let frase = "Javascript é difícil!"
console.log(frase.includes("facil"))


//criar arrwy com construtor
let myArray2 = new Array('a', 'b', 'c')
console.log(myArray2)


//contar elementos de um array
console.log(["a", {type: "array"}, function() { return "alô"}].length)


//string para array
let word4 = "manipulacao"
console.log(Array.from(word4))


//adicionar um item ao fm do array
let techs = ["html", "CSS", "JavaScript",]
console.log(techs.push("NodeJs"))
console.log(techs.unshift("sql"))

//techs.pop()
//techs.shift()

//console.log(techs.slice(1, 3))

//console.log(techs)

//techs.splice(1, 2)

let position = techs.indexOf('css')
console.log(position)