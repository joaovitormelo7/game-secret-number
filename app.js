let listaNumSorteado = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumero();
let tentativas = 1;

function exibirTextoTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInic(){
    exibirTextoTela('h1', 'Jogo do numero secreto');
    exibirTextoTela('p', 'Escolha um numero entre 1 e 10');
}

exibirMensagemInic();

exibirTextoTela('h1', 'Jogo do numero secreto');
exibirTextoTela('p', 'Escolha um numero entre 1 e 10');

function verificarChute(){
    let shoot = document.querySelector('input').value;
    
    if(shoot == numeroSecreto){
        exibirTextoTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTent = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoTela('p', mensagemTent);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if(shoot > numeroSecreto){
            exibirTextoTela('p', 'O numero secreto é menor!');
        }
        else{
            exibirTextoTela('p', 'O numero secreto é maior!');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumero(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementos = listaNumSorteado.length;
    
    if(quantidadeElementos == numeroLimite){
        listaNumSorteado = [];
    }
    
    if(listaNumSorteado.includes(numeroEscolhido)){
        return gerarNumero();
    }
    else{
        listaNumSorteado.push(numeroEscolhido);
        console.log(listaNumSorteado);
        return numeroEscolhido;
    }
}

function limparCampo(){
    shoot = document.querySelector('input');
    shoot.value='';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumero();
    limparCampo();
    tentativas = 1;
    exibirMensagemInic();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}