import http from 'http'
import { jsonBodyHandler } from './middlewares/jsonBodyHandler.js'
import { routerHandler } from './middlewares/routerHandler.js'

const server = http.createServer(async (request, response) => {
    // Chama o middleware para tratar o body como JSON   
    await jsonBodyHandler(request, response)

    // Chama o middleware de rotas valida as rotas
    routerHandler(request, response)

})

server.listen(3333)