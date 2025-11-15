
// "use strict"
function showMessage() {

  let pessoa_Nome = "Fabio Lucas Marconi"

  console.log("ola", pessoa_Nome)

}

showMessage()


class Estudante {

  get point() {
    return 7
  }
}

let estudante = new Estudante()

// estudante.point = 10

// delete window.document

function sum (a,a,c){
  return a + a + c
}

console.log(sum(1,3,2))


// ----- Destructuring em arrays -----

console.log("----- Destructuring em arrays -----")

const data = [ "Fabio", "fabiolukascj@gmail.com"]
const [nome, email] = data

console.log(nome)
console.log(email)

// Destructuring em objetos pega o primeiro valor
const frutas = [ "Banana", "Maçã", "Uva", "Abacaxi"]
const [banana] = frutas
console.log(banana)

// Destructuring pulando valores
const [, , uva] = frutas
console.log(uva)


// ----- Destructuring em objetos -----
console.log("----- Destructuring em objetos -----")

const produto = {
  nomeProduto: "Caneca",
  precoProduto: 19.90,
  materialProduto: "Porcelana"
}
const { nomeProduto, precoProduto } = produto

console.log(nomeProduto)
console.log(precoProduto)


function criarProduto( { nomeProduto, precoProduto, materialProduto } ) {
  console.log("Produto: ", nomeProduto)
  console.log("Preço: ", precoProduto)
  console.log("Material: ", materialProduto)
}

criarProduto({
  nomeProduto: "Camiseta",
  precoProduto: 39.90,
  materialProduto: "Algodão"
})

// rest parames(...) 

const numeros = [1,2,3,4,5,6,7,8,9,10]

function exibirValores( ...rest ) {
  console.log(...rest)
  console.log(rest)
}

exibirValores(...numeros)

console.log("----- Spread em objetos -----")

const pessoas = [
  { nome: "Fabio", idade: 30 },
  { nome: "Lucas", idade: 25 }  
]

console.log(pessoas)
console.log(...pessoas)