interface IProduto {
    id:number,
    name:string
}

function newProduct(product: IProduto){

}
newProduct({id: 1, name:"Produto A"})

// Estendedendo as interface

interface IPessoa {
    id:number,
    name: string
}

interface IProfessor extends IPessoa {
    materias: string[],
}

interface IEstudante extends IPessoa {
    age:number
}

let professor: IProfessor = {
    id:1,
    name:"Pedro",
    materias:["Java"],
}

let estudante: IEstudante = {
    id:1,
    name:"Pedro",
    age:20
}