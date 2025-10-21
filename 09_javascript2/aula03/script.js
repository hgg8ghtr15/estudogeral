// Criando array com construtor
const nweArray = Array()
console.log(nweArray)

console.log(nweArray.length)

//  Array []
//  Objeto {}

const availabre = new Array(10)
console.log(availabre.length)

// Criando array
let frutas = ["Maça", "Abacaxi", "Pera"]

console.log(frutas[1])

// Obter a ultima linha do Array.
console.log(frutas[frutas.length - 1])

// Converter string em array
const fullName = "Fabio Lucas Marconi"

let nomeLista = Array.from(fullName)
console.log(nomeLista)

// Adicionando item no array
frutas.push("Uva") //no final
frutas.unshift("Abacate") // no inicio
console.log(frutas)
// Remove
frutas.shift()//do incio
frutas.pop()//do incio
console.log(frutas)

// Buscar um item no array
let position = frutas.indexOf("Pera")
console.log(frutas)

frutas.splice(position, 1)
console.log(frutas)

// Salvando no array um elemento de objeto
const todoTipo = [
    function teste(){
        console.log("Executando função")
    }
]
todoTipo[0]()

// Verifica se no elemento possui um elemento, retorna true e false
console.log(frutas)
const estaIncluso = frutas.includes("Uva")
console.log(estaIncluso)

const array = [1, 2, 3, 4, 5];
console.log(array.splice(2, 1, 'x', 'y', 'z'));