
/*
function contar() {
    var pri = document.getElementById('txt1')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')
    res = pri + passo

    for(; pri < fim; res) {
        console.log(res)
}

*/

/*
function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length ==  0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados')

    } else {;
        res.innerHTML = 'Contando: '
        let i = Number(ini.Value)
        let f = Number(fim.Value)
        let p = Number(passo.Value)

        for(let c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F449}`
        }
    }
}
*/

function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        window.alert('[ERRO] faltam dados')
        
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p =1
        }
        if(i < f) {
            // CONTAGEM CRESCENTE
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            // CONTAGEM REGRESSIVA
            for(let c = i; c>=f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += '\u{1F3c1}'
    }
}   