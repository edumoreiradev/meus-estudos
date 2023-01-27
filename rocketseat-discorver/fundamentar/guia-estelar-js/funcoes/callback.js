function sayMyName(name) {
    name()
}
//sayMyName({name: 'Edu', age: 18})

sayMyName( 
    () => {
        console.log('Estou em uma callback')
    }
)