
//Usando Type

type Animal = {
    id:number,
    nome:string,
}

function novoAnimmal (animal:Animal){

}

novoAnimmal({id:1, nome:"Cachorro"})

// Usando em uma consulata para o banco personalizando a tipagem de uma resposta.

type SelectResponse = Animal[] | null

function SelectResponse():SelectResponse {
    
    return null
}

// herdando

type Pessoa = {
    id: number,
    name:string
}

type Professor = Pessoa & {
    materias: []
}

type Alunos = Pessoa & {
    idade : number
}

let aluno: Alunos


/* Primitivos
- Interface
Descrever a forma de objetos.
Usa a palavra-chave extends para herança.
Suporta "declaration merging" (mesclagem de declarações) - interfaces com o mesmo nome são combinadas automaticamente.
Não pode ser usada para renomear tipos primitivos (ex: interface Nome = string é inválido).	

- Type
Descrever qualquer tipo (objetos, primitivos, etc.).
Usa o operador de interseção (&)
Não suporta mesclagem de declarações; declarar um type com o mesmo nome no mesmo escopo causará um erro.
Pode criar um alias para qualquer tipo, incluindo primitivos (ex: type Nome = string).
*/

