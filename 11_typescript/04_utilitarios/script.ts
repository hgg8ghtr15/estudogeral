// *******   Suando o Partial

interface IUsuario {
    id: number,
    name: string,
    email: string,
}

const usuario: IUsuario = {
    id:1,
    name: "Fabio",
    email: "fabio@gmail.com"
}

const updateUsuario:Partial <IUsuario> = {
    name:"Fabio Lucas Marconi"
}

// ******   PICK
interface IBook {
    title: string
    pages: number
    author: string
}

// não presis criar essa para exibir o titulo
interface IBookPreview {
    title: string
}

const bookPreview: Pick <IBook, "title" | "pages" > = { title: "JavaScript", pages: 10}


// ***** Omit Crio um objeto omit a tipagem

interface IBook {
    title: string
    pages: number
    author: string
}

const book2: Omit<IBook, "author" | "">= { title: "Fabio", pages:1}

console.log(book2)


// ***** Record Cria um objeto com esse padrão

const scores: Record<string, number> = {
    "rodigo": 1
}

const scores2: Record<number, string> = {
    1: "rodigo"
}

// Limitar as chave de um objeto

type Perfil = "Admin" | "User" | "Convidado"

const user: Record<Perfil, number> = {
    "Admin":1,
    "User":2,
    "Convidado": 3,
}

interface IUsuario2 {
    name: string,
    email:string,
}

const users: Record<number, IUsuario2> = {
    1: {name:"fabio", email:"fabio@gmail.com"},
    2: {name:"fabio", email:"fabio@gmail.com"}
}

// ***** typeof

interface Produto {
    id: number,
    name: string,
}

const produto1:Produto = {id: 1, name:"panela"}

const produto2: typeof produto1 = {id:2, name:"garfo"}

// ***** keyof

const icons = {
    add: "",
    home:"",
    remove: ""
}

type Icon = typeof icons

const icon: keyof Icon = "add"