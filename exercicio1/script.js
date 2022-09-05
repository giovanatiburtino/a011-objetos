//Crie um array vazio chamado `sacolao`, e siga os passos abaixo:
let sacolao = []
console.log(sacolao)

//a) Crie três objetos que vão representar frutas do sacolão.
let bananaPrata = {
nome: "Banana Prata",
preco: 1.08,
disponibilidade: true
}

let bananaNanica = {
nome: "Batata Nanica",
preco: 0.86,
disponibilidade: true
}

let bananaMaça = {
nome: "Banana Maçã",
preco: 1.19,
disponibilidade: false
}

//b) Adicione os objetos ao array `sacolao` utilizando o método `push()`
sacolao.push(bananaNanica)
sacolao.push(bananaNanica)
sacolao.push(bananaMaça)

//c) Imprima a o array `sacolao`, e certifique-se de que agora ela seja um array **com três objetos**
console.log("Frutas do sacolão:", sacolao)