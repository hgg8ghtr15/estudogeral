// Função while
console.log("------- while")
let execute = true

// while (execute){
//     let response = window.prompt("Digite ( 1 ) Para executar e ( 2 ) Para Parar")

//     if(response === "2"){
//         execute = false
//     }else{
//         console.log("Executado")
//     }
// }

console.log("------- Do - while")
do{
    execute = false
    console.log("Executa uma vez.")
}while(execute);

console.log("------- For")

for(cont = 0 ; cont < 10; cont++){
    console.log(`Contador em ${cont}`)
}

console.log("------- For in")
let pessoa  = {
    name:"Fabio",
    sobrenome:"marconi",
    email: "fabio.marconi@viacometa.com.br"
}

for( let prop in pessoa){ // itera sobre o indice
    // exibe a propriedade do objeto
    console.log(prop)
    // exibe o valor da objeto
    console.log(pessoa[prop])
}

console.log("------- For of") // itera sobre o valor
let studantes = ["Fabio", "Mariana", "Elizete"]

for (let valor of studantes){
    console.log(valor)
}

let pessoas = [pessoa]
for ( pessoaa of pessoas){
    console.log(pessoaa.name)
}

console.log("------- Break")

for (i = 0 ; i<100 ; i++){
    if(i == 10){
        console.log("Chogou em 10")
        break
    }
}
console.log("------- Break")

for (i = 0 ; i<10 ; i++){
    if(i == 5){
        console.log("Pular o 5")
        continue
    }
    console.log("Valor "+i)
}