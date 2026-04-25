console.log("######### Início da Aula API usando o then() #########")
// fetch("http://localhost:3000/produtos")
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data)
//     })

console.log("######### Início da Aula API com async/await #########")

async function fetchProdutos() {
    const response = await fetch("http://localhost:3000/produtos")
    const data = await response.json()
    console.log(data)
}

// fetchProdutos()

console.log("######### Início da Aula API com async/await passando parametro #########")
async function fetchProduto(id) {
    const response = await fetch(`http://localhost:3000/produtos/${id}`)
    const data = await response.json()
    console.log(data)
}
// fetchProduto(5)


console.log("######### Início da Aula API fazendo post #########")

const nome = document.querySelector("#nome")
const preco = document.querySelector("#preco")

const produtoForm = document.querySelector("#produtoForm")

addEventListener("submit", async (event) => {
    event.preventDefault()

    await fetch("http://localhost:3000/produtos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: new Date().getTime().toString(),
            nome: nome.value,
            preco: preco.value
        })

    })


    await fetchProdutos()
})