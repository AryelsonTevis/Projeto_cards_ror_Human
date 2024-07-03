const btnAvancar = document.getElementById("btn-avancar");
let cartaoAtual = 0;
const cartoes =document.querySelectorAll(".cartao");

btnAvancar.addEventListener("click", function(){
    const ehUltimocartao = cartaoAtual === cartoes.length - 1;
    if(ehUltimocartao) return;
    
    escondercartaoselecionado();
    
    cartaoAtual++;
    
    mostrarcartao();
    

})

const btnVoltar = document.getElementById("btn-voltar");

btnVoltar.addEventListener("click", function(){
    const ehPrimeirocartao = cartaoAtual === 0;
    if(ehPrimeirocartao) return;
    escondercartaoselecionado();
    cartaoAtual--;
    mostrarcartao();

})

function mostrarcartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function escondercartaoselecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}
