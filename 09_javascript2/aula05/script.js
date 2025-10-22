// Estudando a Data.
console.log("------ Data Atual")
// Exive a data Atual
console.log(new Date())
console.log(new Date(0)) // data de referencia.

// Exibe a quantidade de MS
console.log(new Date().getTime())


console.log("------ Definir Data.")

console.log(new Date(2024, 6, 3)) // ano, mes 0-11 , Dia
console.log(new Date(2024, 6, 3, 14, 30, 0)) // ano, mes 0-11 , Dia, hora, Minuto, Segundo

console.log(new Date("2024-06-03T14:30:00")) // ano, mes 0-11 , Dia, hora, Minuto, Segundo

console.log("------ Metodos get.")
const date = new Date("2024-06-03T14:30:00")

//domingo = 0
console.log(date.getDay())

// 0  a 30
console.log(date.getDate())

// 0 - 11
console.log(date.getMonth())

console.log(date.getMinutes())

console.log(date.getSeconds())

console.log("------ Metodos set.")

console.log(date.setFullYear(2050))
console.log(date.setDate(10))
console.log(date.setMonth(10))
console.log(date)



console.log("------ Metodos de formatação.")
const date2 = new Date("2024-06-03T14:30:00")

//colocando o 0 na frente do mes
let dia = (date2.getDate()).toString().padStart(2, "0")
let mes = (date2.getMonth() + 1).toString().padStart(2, "0")
let ano = (date2.getFullYear().toString().padStart(2, "0"))

let hora = date2.getHours()
let minuto = date2.getMinutes()

console.log(`${dia}/${mes}/${ano} as ${hora}:${minuto})`)



console.log("------ Fotmatação de Data")
const date3 = new Date("2024-06-03T14:30:00")

console.log(date3.toString())
console.log(date3.toDateString())
console.log(date3.toTimeString())

console.log("------ Fotmatação de Data")
const date4 = new Date("2024-06-03T14:30:00")
console.log(date4.toLocaleDateString())
console.log(date4.toLocaleTimeString())
console.log(date4.toLocaleDateString("en"))
console.log(date4.toLocaleTimeString("en"))

console.log("------ Fotmatação de Data")
const date5 = new Date("2024-06-03T14:30:00")

console.log(date5.toLocaleString("pt-br", {
    dateStyle: "short",
}))

console.log(date5.toLocaleString("pt-br", {
    dateStyle: "long",
}))

console.log(date5.toLocaleString("pt-br", {
    dateStyle: "medium",
}))

console.log(date5.toLocaleString("pt-br", {
    dateStyle: "full",
}))

console.log(date5.toLocaleString("pt-br", {
    day: "2-digit",
}))

console.log(date5.toLocaleString("pt-br", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
}))

console.log(date5.toLocaleString("pt-br", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
}))

let valor = 150
console.log(valor.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL"
}))

console.log("------ Intl")
// const date6 = new Date("2024-06-03T14:30:00")
const currentLocate = Intl.DateTimeFormat().resolvedOptions()

console.log(currentLocate)

let novaData = new Date()
let diferenca = novaData.getTimezoneOffset() / 60
console.log(novaData)

console.log("------ Criando data no formato de time zone")
const dataNova = new Date("2025-10-22T03:18:16.458-04:00")
// console.log(dataNova.toISOString())
console.log(dataNova.toLocaleString())
console.log(novaData.setDate(25))
console.log("12".padStart(4, "0"))
