export async function jsonBodyHandler(request, response) {
    const buffers = []

    // Lê os dados do corpo da requisição
    for await (const chunk of request) {
        // Armazena os pedaços de dados recebidos
        buffers.push(chunk)
    }

    try {
        // console.log(Buffer.concat(buffers).toString())
        // Concatena os pedaços e converte para JSON
        request.body = JSON.parse(Buffer.concat(buffers).toString())
    } catch (error) {
        request.body = null
    }
    // Define o cabeçalho da resposta como JSON
    response.setHeader("Content-Type","application/json")

}