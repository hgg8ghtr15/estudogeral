/**
 * Condição ternario
 */

let age = 16

console.log(
    age >= 18  // condição
        ? "Habito a dirigir"  // verdadeiro
        : "Não pode digigir" //false
)
console.log("### Falsy ###")
console.log(false ? "verdadeiro" : "False")
console.log(0 ? "verdadeiro" : "False")
console.log(-0 ? "verdadeiro" : "False")
console.log("" ? "verdadeiro" : "False")
console.log(null ? "verdadeiro" : "False")
console.log(undefined ? "verdadeiro" : "False")
console.log(NaN ? "verdadeiro" : "False")

console.log("### Trutry ###")
console.log(true ? "verdadeiro" : "False")
console.log({} ? "verdadeiro" : "False")
console.log([] ? "verdadeiro" : "False")
console.log(1.23 ? "verdadeiro" : "False")
console.log("0" ? "verdadeiro" : "False")
console.log(" " ? "verdadeiro" : "False")
console.log("Fabio" ? "verdadeiro" : "False")
console.log("False" ? "verdadeiro" : "False")
console.log(-1 ? "verdadeiro" : "False")
console.log(Infinity ? "verdadeiro" : "False")
console.log(-Infinity ? "verdadeiro" : "False")

console.log("-----------------------------------")
console.log("### If e else ###")
console.log("-----------------------------------")
let hora = 21

if (hora <= 12) {
    console.log("bom dia.")
} else if (hora > 12 && hora <= 18) {
    console.log("Boa tarde.")
} else {
    console.log("Boa noite.")
}


console.log("-----------------------------------")
console.log("### switch ###")
console.log("-----------------------------------")
let opton = 10

switch (opton){
    case 1:
        console.log("RH")
        break
    case 2:
        console.log("Financeiro")
        break
    default:
        console.log("Atendente")
}

console.log("-----------------------------------")
console.log("### Try cath ###")
console.log("-----------------------------------")
let result = 0
try {
    if(result === 0){
        throw new Error("O valor é igual a 0")
    }
} catch (error) {
    console.log(error)
}finally{
    console.log("Finalizado")
}
