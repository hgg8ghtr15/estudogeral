// Função normal
function mensagem() {
    console.log("ola Mundo")
}
mensagem()

// função com argumento
function mensagem2(username) {
    console.log(`Olá ${username}`)
}
mensagem2("Ana")
mensagem2("Pedro")

function soma(a, b = 10) {
    console.log(a + b)
}
soma(1, 2)
soma(1)

//função com return
function soma2(a, b) {
    let resultado = a + b
    return resultado
}
let resultado = soma2(10, 20)
console.log(resultado)

//Hosting
hosting()
function hosting() {
    console.log("Hosting")
}

//documentação
/**
 * 
 * @param {String} email user email
 * @param {String} password user senha com 6 caracteres
 * @returns {Number} user id
 */
function singIn(email, password) {

    return 7
}
singIn()

//função Anonima
const showMenssagem = function (nome) {
    console.log("Ola Mundo " + nome)
}
showMenssagem("Fabio")

// Arrow functions
const funcaoArrow = (username) => {
    console.log("Bem vindo " + username)
}
funcaoArrow("Mariana")

// Callback passado como função
function execute(taskNome, callback) { // Parâmetro corrigido para "callback"
    console.log("O nome da Tarefa é " + taskNome);
    callback(); // Agora a chamada corresponde ao parâmetro
}

function callback() {
    console.log("Callback Executado");
}
execute("Download", callback);

// Callback criado na chamada da execução
console.log("----");
execute("Fazer Upload", function () {
    console.log("Criando uma função de callBack!");
});

console.log("----");
// fazendo com arrow function
execute("Excluir arquivo", () => {
    console.log("Arquivo excluído com sucesso!");
});