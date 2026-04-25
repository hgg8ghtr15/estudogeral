type UserResponse = {
    id:number;
    name:string;
    avatar: string
}


// convertendo um tipo que nao sei para algo que deve ser assim, usado em API.
let userResponse = {} as UserResponse

userResponse.avatar


// Definindo valores em um type

type Size = "small" | "Medium" | "large"

let size: Size

size = "Medium"


// Enum usado para Constantes

enum Perfil {
    Admin = 1,
    Client = 2,
    Vendedor = 3
}
let perfil: number = Perfil.Admin

console.log(perfil)