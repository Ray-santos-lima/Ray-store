const catalogo = [{
    id: 1,
    nome: "camisa azul",
    marca: "Adidas",
    preco: 70,
    nomeArquivoImagem: "cam01.jpeg",

},
{
    id: 2,
    nome: "camisa social azul",
    marca: "Arames",
    preco: 80,
    nomeArquivoImagem: "cam02.jpeg",

},
{
    id: 3,
    nome: "camisa Adidas preta",
    marca: "Adidas",
    preco: 50,
    nomeArquivoImagem: "cam03.jpeg",

},
{
    id: 4,
    nome: "camisa ferrari vermelha",
    marca: "Ferrari",
    preco: 75,
    nomeArquivoImagem: "cam04.jpeg",

},
{
    id: 5,
    nome: "camisa Sao paulo",
    marca: "Adidas",
    preco: 200,
    nomeArquivoImagem: "cam05.jpeg",

},
{
    id: 6,
    nome: "camisa do Vasco",
    marca: "Nike",
    preco: 85,
    nomeArquivoImagem: "cam06.jpeg",

},
{
    id: 7,
    nome: "camisa game of thrones",
    marca: "HBO",
    preco: 78,
    nomeArquivoImagem: "cam07.jpeg",

    },
    {
        id: 8,
        nome: "camisa do Barcelona",
        marca: "Nike",
        preco: 98,
        nomeArquivoImagem: "cam08.jpeg",
    
    },
];

for (const produtoCatalogo of catalogo) {
    const cartaoProduto = `<div class="border-solid border-2 border-sky-500 w-48 m-2 " id="card-produto-${produtoCatalogo.id}">
<img src="imagens de camisa/${produtoCatalogo.nomeArquivoImagem}" alt="imagens de camisa"
style="height: 300px"
/>
<p>${produtoCatalogo.marca}</p>
<p>${produtoCatalogo.nome}</p>
<p>R$${produtoCatalogo.preco},00</p>
<button>Adicionar</button>


</div>`;

    document.getElementById("container-produto").innerHTML += cartaoProduto;
}






