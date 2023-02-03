//throw

function sayMyName(name = '') {
    if (name === '') {
        throw ('Nome é necessário')
    }

    console.log(name)
}

//try catch

try {
    sayMyName('Edu')
} catch (e) {
    console.log(e)
}

console.log('após a função de erro')