import { routes } from "../routes.js"
import { extractQuereyParams } from "../utils/extract-querey-params.js"
export function routerHandler(req, res) {
    // Encontra a rota que corresponde ao método e caminho da requisição
    const route = routes.find((route) => {
        // Verifica se o método e o caminho correspondem
        return route.method === req.method && route.path.test(req.url)
    })

    if (route) {
        // Extrai os parâmetros da rota usando regex
        const routerParams = req.url.match(route.path)
        console.log(routerParams)

        // Atribui os parâmetros extraídos à requisição
        const { query, ...params } = routerParams.groups

        // agora toda as propriedades de params estão em req.params
        req.params = params
        // Verifica se há parâmetros de consulta (query) e os extrai
        req.query = query ? extractQuereyParams(query) : {}

        // Adiciona os parâmetros à requisição
        return route.controller(req, res)
    }

    return res.writeHead(404).end("Rota Não encontrada ! ")
}