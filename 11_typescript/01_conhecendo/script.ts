const message = "Ola mundo"

// message = "teste"

// message()

const user = {
    name: "Fabio",
    email: "fabio@gmail.com"
}

//  Usando os tipo ptimitivo de TS
let nome: string
let numero: number = 10
let verdadeiro: boolean = true

nome = "Fabio"

// usando em Array
let nomes: string[];
let numeros: string[];


//Usando em função
function suma(x: number, y: number): number {
    const result: number = x + y
    return result
}

//Usando em função anonima
const calcula = (x: number, y: number): number => {
    const numero: number = x + y
    return numero
}


// usando em object
let user2:{name:string, idade?:number} = {
    name:"fabio",
    idade:36
}

let response: string | null | number

response = "10"
response = null
