let desafio = document.querySelector('h1');
desafio.innerHTML = 'Hora do desafio';

function botaoClick(){
    console.log('botao clicado');
}

function alertaJS(){
    alert('EU amo JS');
}

function promptBotao(){
let cidade = prompt('Digite o nome de uma cidade');
    alert(`Estive em ${cidade} e lembrei de vc`);
}

function somarValor(){
    let valor1 = prompt('digite o valor1: ');
    let valor2 = prompt('digite o valor2: ');
    let resultado;

    valor1 = parseInt(valor1);
    valor2 = parseInt(valor2);

    resultado = valor1 + valor2;

    alert(`o valor do resultado é ${resultado}`);
}