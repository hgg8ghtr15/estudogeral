console.log("--- Estudando String")
let mensagem = "Ola mundo."
let valor = 10

// Metodo
console.log(mensagem.toLowerCase())
console.log(mensagem.toUpperCase())
// propreidade
console.log(mensagem.length)
console.log(valor.toString().length)

console.log("--- Fatiar")
// Fatiar 
let trocando = mensagem.replace("Ola","Hi")
console.log(trocando)

let fatiando = mensagem.slice(0, 3)
console.log(fatiando)

let trasparafrente = mensagem.slice(-6, -1)
console.log(trasparafrente)

let retirarEspacos = "       Ola mundo de tamanho xxz    "
console.log(retirarEspacos.length)
console.log(retirarEspacos.trim().length)
let novo = retirarEspacos.trim()
console.log(novo)

console.log("--- complementando uma String")
// complementando uma String
const cartaoCredito = "1234567890124928"
const ultimosDigitos = cartaoCredito.slice(-4)
console.log(ultimosDigitos)
const numeroMascarado = ultimosDigitos.padStart(cartaoCredito.length, "X")
console.log(numeroMascarado)

const numeroMascarado2 = ultimosDigitos.padEnd(cartaoCredito.length, "X")
console.log(numeroMascarado2)

// Separa e juntar texto
console.log("--- Separa e juntar texto")
let texto2 = "Estuando, Aprendendo, Praticado"
let texto3 = "Programação"
let texto4 = texto2+" "+texto3
console.log(texto4)

let textoSeparado  = texto2.split(",")
console.log(textoSeparado)
let textoJunto2 = textoSeparado.join(" -")
console.log(textoJunto2)

console.log("--- encontrando um local no texto")
// encontrando um local no texto.
let texo6 = "Estou estudando programação em JS"
console.log(texo6.indexOf("JS")) //se não encontrar retorna -1

console.log(texo6.includes("JS")).tou