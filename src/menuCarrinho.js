import { catalogo } from "./ultilidades";


const idsProdutoCarrinhoComQuantidade = {};

function abrirCarrinho() {
    document.getElementById("carrinho").classList.add("right-[0px]");
    document.getElementById("carrinho").classList.remove("right-[-360px]");

}
function fecharCarrinho() {
    document.getElementById("carrinho").classList.remove("right-[0px]");
    document.getElementById("carrinho").classList.add("right-[-360px]");
}

export function inicializarCarrinho() {
    const botaoFecharCarrinho = document.getElementById("fechar-carrinho")
    const botaoAbrirCarrinho = document.getElementById("abrir-carrinho")

    botaoFecharCarrinho.addEventListener("click", fecharCarrinho);
    botaoAbrirCarrinho.addEventListener("click", abrirCarrinho);
    
}
function incrementarQuantidadeProduto(idProduto) {
    idsProdutoCarrinhoComQuantidade[idProduto]++;
    atualizarInformacaoQuantidade(idProduto);
    
}

function atualizarInformacaoQuantidade(idProduto) {
    document.getElementById(`quantidade-${idProduto}`).innerText = idsProdutoCarrinhoComQuantidade[idProduto];
    
}
function decrementarQuantidadeProduto(idProduto) {
    idsProdutoCarrinhoComQuantidade[idProduto]--;
    atualizarInformacaoQuantidade(idProduto);
    
}


export function adicionarAoCarrinho(idProduto) {
    if (idProduto in idsProdutoCarrinhoComQuantidade) {
        incrementarQuantidadeProduto(idProduto);
        return;
    }



    idsProdutoCarrinhoComQuantidade[idProduto] = 1;
    const produto = catalogo.find(p => p.id === idProduto);

    const containerProdutoCarrinho = document.getElementById("produtos-carrinho");
    const cartaoProdutoCarrinho = `<article class="flex bg-slate-100 rounded-lg p-1 relative" >

    <button id="fechar-carrinho" class="absolute top-0 right-2"><i class="fa-solid fa-xmark text-slate-500 hover:text-slate-800  "></i></button>

<img src="imagens de camisa/${produto.nomeArquivoImagem}" alt="${produto.nome}" class="h-24 rounded-lg "/>

<div class="p-2 flex flex-col justify-between">
<p class="text-slate-900 text-sm " > ${produto.nome} </p>

<p class="text-green-700 text-lg">R$${produto.preco}</p>
</div>

<div class="flex text-slate-950 items-end absolute bottom-0 right-2 text-lg">   
   <button id='decrementar-produto-${produto.id}' >-</button>
<p id= 'quantidade-${produto.id}' class='ml-2' > ${idsProdutoCarrinhoComQuantidade[produto.id]} </p>
   <button  class='ml-2' id='incrementar-produto-${produto.id}' >+</button>

</div>

</article>`;
    containerProdutoCarrinho.innerHTML += cartaoProdutoCarrinho;

    document
        .getElementById(`decrementar-produto-${produto.id}`)
        .addEventListener('click', () => decrementarQuantidadeProduto(produto.id));
    
        document
        .getElementById(`incrementar-produto-${produto.id}`)
        .addEventListener('click', () => incrementarQuantidadeProduto(produto.id));
    
}




