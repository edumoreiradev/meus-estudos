function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando"
    }
}

const edu = new Person("Edu")
const joao = new Person("João")

console.log(joao.walk())
console.log(edu.walk())
