import http from "node:http"
import { jsonBodyHandler } from "./middlewares/jsonBodyHandler.js"
import { routerHandler } from "./middlewares/routeHandler.js"

const server = http.createServer(async (req, res) => {
    const { method, url } = req

    // Middleware para tratar o corpo JSON
    await jsonBodyHandler(req, res)

    routerHandler(req, res)
    // if (method === "GET" && url === "/produtos") {
    //     return res.end("Lista de produtos.")
    // }
    // if (method === "POST" && url === "/produtos") {
    //     console.log(req.body)
    //     // Simula a criação de um produto
    //     return res.writeHead(201).end(JSON.stringify(req.body))
    // }
    // console.log(url)
    // // Rota não encontrada
    // return res.writeHead(404).end("Rota Não encontrada.")
})

server.listen(3333)