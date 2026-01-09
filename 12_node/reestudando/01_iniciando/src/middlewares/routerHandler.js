import { routes } from '../routes.js'
import { extractQueryParams } from '../utils/extractQueryParams.js'

export function routerHandler(request, response) {
    // Procura a rota que corresponde ao método e URL da requisição
    const route = routes.find((route) => {
        // Verifica se o método e a URL da requisição correspondem à rota atual
        return route.method === request.method && route.path.test(request.url)
    })

    // Se a rota for encontrada, chama o controller associado
    if (route) {
        const routeParams = request.url.match(route.path)
        const { query, ...params } = routeParams.groups

        request.params = params
        
        // request.query = query ? extractQueryParams(query) : {}

        if (request.query) {
            request.query = {}
        } else {
            request.query = extractQueryParams(query)
        }

        return route.controller(request, response)
    }

    // Se a rota não for encontrada, retorna 404
    return response.writeHead(404).end(`Rota ${request.url} não encontrada.`)
}