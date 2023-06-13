
function mostrarAntecessorSucessor() {
var numero = parseInt(prompt("Digite um número inteiro:"));

var antecessor = numero - 1;
var sucessor = numero + 1;

alert("Antecessor: " + antecessor + "\nSucessor: " + sucessor);
}

 

function mostrarPrecoProduto() {
var produto = prompt("Digite o nome do produto que está sendo comprado:");
var preco = parseFloat(prompt("Digite o preço do produto:"));

alert("Produto: " + produto + "\nPreço: R$" + preco.toFixed(2));
}
