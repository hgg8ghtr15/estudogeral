class Pessoa {
    constructor(nome, email) {
        this.nome = nome
        this.email = email
    }
    sendEmail(){
    console.log(`E-mail enviado com sucesso para ${this.email}`)
    }
}

let nome = "Fabio"
let email = "Fábio.lukas@gmail.com"

const pessoa = new Pessoa(nome, email)

pessoa.sendEmail()

// Classe com metodos estatico, não prescisa ser instanciada.
class Produto1 {
    static mesnsagem(){
        console.log("Olá")
    }
}

Produto1.mesnsagem()

// Herança
class Animal {
    constructor(nome){
        this.nome = nome
    }

    somAnimal(){
        console.log("Som generico")
    }
}

class Dog extends Animal{
    somAnimal(){
        console.log("Au Au")
    }
}

class Cat extends Animal{
    somAnimal(){
        console.log("Miau Miau")
    }
}

const cachorro = new Dog("Fantasma")
const gato = new Cat("Xana")

cachorro.somAnimal()
gato.somAnimal()


// prototype
const endereco = {
    cidade:"São Paulo",
    pais: "Brasil"
}

console.log(endereco.__proto__)

// tratando erro com try-cat

const lista = [17]
const numero = 300
try {
    // lista.execute()
    if(!lista.includes(17)){
        throw new Error("O numero 17 não existe!")
    }
    if(numero > 99 ){
        throw new RangeError("O numero esta fora da Range.")
    }
} catch (error) {
    console.log(error)
    if(error instanceof TypeError){
        console.log("Classe indisponivel.")
    }
    if(error instanceof RangeError){
        console.log(error.message)
    }else{
        console.log("Mensagem personalisada.")
    }
}

// Criando classe de erro consumisada.

class MyError {
    constructor(message){
        this.message = "Classe de erro customizada ! " + message

    }
}

try {
    throw new MyError("Para erro xxx")
} catch (error) {
    if(error instanceof MyError){
        console.log(error)
    }
}
