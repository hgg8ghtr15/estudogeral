

// Criando objeto vazio
const obj = {

}

const user = {
    email: "fabio.marconi@viacometa.com.br",
    idade: 15,
    name: {
        primeiro_Nome: "Fabio",
        segundo_Nome: "Lucas"
    },
    endereco: {
        rua: "Rua x",
        numero: 930,
        cidade: "Lucas",
        cep: "12345-123"
    },

    messagem: function () {
        // 
        console.log(this.name)
    },
}

// Formas de acessar os objetos e funções
console.log("----------------")
console.log(user.name.primeiro_Nome)
user.messagem()

console.log("----------------")
// Forma de conchetes
console.log(user["name"]["primeiro_Nome"])
user["name"]["primeiro_Nome"] = "Mariana"
console.log(user["name"]["primeiro_Nome"])
user["messagem"]

console.log("---------------- exibir objeto com propriedade opcional")
// Forma de exibir objeto com propriedade opcional
const usuario2 = {
    id: 1,
    nome: "Fabio",
    /*
    endereco: {
        rua: "Rua A",
        cidade: "São Paulo",
        geo:{
            latitude:47.808,
            logitude:17.5674,
        },
    },
    */
    /*
     mensagem: function (){
         console.log(`Olá ${this?.nome?.endereco}`)
     }
     */
}
// Forma de exibir objeto com propriedade opcional
console.log(usuario2?.nome?.endereco)
usuario2.mensagem?.()

console.log("---------------- Coalescencia Padrão")
// Coalescencia Padrão
// Null ou undefined
let texto = "Ola mundo"
console.log(texto ?? "Conteudo padrão")

let texto2 = null
console.log(texto2 ?? "Conteudo padrão")

const usuario3 = {
    name: "Fabio",
    imagem: undefined
}
console.log(usuario3.imagem ?? "imagemPadrão.png")

console.log("---------------- Função Construtora")
// Função Construtora

function createProduto(nome) {
    const produto = {}

    produto.nome = nome

    produto.detalhes = function () {
        console.log(`O nome do produto é ${this.nome}`)
    }

    return produto
}

const produto1 = new createProduto("Mause")
console.log(produto1.nome)
produto1.detalhes()

const produto2 = new createProduto("Teclado")
console.log(produto2.nome)
produto2.detalhes()
// outra forma de fazer a mesma coisa acima

function createPessoa(nome) {
    this.nome = nome
    this.messagem = function () {
        console.log(`Olá ${this.nome}`)
    }
}

const pessoa1 = new createPessoa("Fabio")
console.log(pessoa1.nome)
pessoa1.messagem()
console.log("--")
const pessoa2 = new createPessoa("Lucas")
console.log(pessoa2.nome)
pessoa2.messagem()