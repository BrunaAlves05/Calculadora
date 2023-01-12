const botoes = document.querySelectorAll('#btn')
const input = document.getElementById('input__container')

botoes.forEach((botao)=> {
    botao.addEventListener('click', (e)=> {
        var valor = botao.value
        checaTipoDoCaracter(valor)
    })
})

function checaValor(botao) {
    console.log(botao)
}

function addValor(valor) {
    input.value += valor
}

function checaTipoDoCaracter(valor){
    if(valor== 'C') {
        input.value = ' '
    } else if (valor == '='){
        input.value = eval(input.value)
    } else {
        addValor(valor)
    }
}
