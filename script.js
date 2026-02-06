const produtos = [

{
id:"jbl520bt",
nome:"JBL Tune 520BT Bluetooth",
preco:207.52,
imagem:"imagens/jbl520bt.jpg",
link:"https://amzn.to/46rJKQf"
},

{
id:"jbl500",
nome:"JBL Tune 500 com fio",
preco:137.76,
imagem:"imagens/jbl500.jpg",
link:"https://amzn.to/4bEFSPt"
},

{
id:"aerjoy",
nome:"Fone Bluetooth AerJoy",
preco:163.90,
imagem:"imagens/aerjoy.jpg",
link:"https://amzn.to/4bxUTma"
}

];

function mostrar(lista){

const results = document.getElementById("results");

results.innerHTML="";

lista.forEach(p=>{

results.innerHTML+=`

<div class="card">

<img src="${p.imagem}">

<h3>${p.nome}</h3>

<div class="price">
R$ ${p.preco.toFixed(2)}
</div>

<a class="buy" href="produto.html?id=${p.id}">
Ver Produto
</a>

</div>

`;

});

}

function buscar(){

const q=document.getElementById("query").value.toLowerCase();

const filtrados=produtos.filter(p=>
p.nome.toLowerCase().includes(q)
);

mostrar(filtrados);

}

mostrar(produtos);
