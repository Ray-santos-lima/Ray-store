 import { adicionarAoCarrinho } from "./menuCarrinho";
import { catalogo } from "./ultilidades";

export function renderizarCatalogo() {

    for (const produtoCatalogo of catalogo) {
        const cartaoProduto = `<div class="border-solid  w-48 m-2 flex flex-col p-2 justify-between shadow-xl shadow-slate-600 rounded-lg  group " id="card-produto-${produtoCatalogo.id}">
<img src="imagens de camisa/${produtoCatalogo.nomeArquivoImagem}" alt="imagens de camisa"
class=" group-hover:scale-110 duration-300 my-3 rounded-lg "

/>
<p class="text-sm"> ${produtoCatalogo.marca} </p>
<p class="text-sm">${produtoCatalogo.nome} </p>
<p class="text-sm" >R$${produtoCatalogo.preco},00</p>
<button id="adicionar-${produtoCatalogo.id}" class="bg-slate-950  hover:bg-slate-700 text-slate-200"
><i class="fa-solid fa-cart-plus"></i></button>


</div>`;

        document.getElementById("container-produto").innerHTML += cartaoProduto;
        document.getElementById(`adicionar-${produtoCatalogo.id}`)
    }

    for (const produtoCatalogo of catalogo) {
        document
            .getElementById(`adicionar-${produtoCatalogo.id}`)
            .addEventListener("click", () => adicionarAoCarrinho(produtoCatalogo.id));
    }
}