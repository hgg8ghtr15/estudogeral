export async function jsonBodyHandler(request, response) {
    // Array que salva as informaçôes recebidas no request
    const buffers = []

    // Coleta os dados da requisição
    for await (const chunk of request) {
        buffers.push(chunk)
    }

    //insere o body na requisição com os dados em formato JSON
    try {
        request.body = JSON.parse(Buffer.concat(buffers).toString())
    } catch (error) {
        request.body = null
    }

    response.setHeader('Content-Type', 'application/json')

}