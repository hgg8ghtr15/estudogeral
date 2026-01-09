import { parseRoutePath } from './utils/parseRoutePath.js'
export const routes = [
    {
        method: 'GET',
        path: '/produtos',
        controller: (request, response) => {
            console.log(request.query)
            return response.writeHead(200).end('Lista de produtos.')
        }
    },
    {
        method: 'POST',
        path: '/produtos',
        controller: (request, response) => {
            
            return response.writeHead(201).end(JSON.stringify(request.body))
        }
    },
    {
        method: 'DELETE',
        path: '/produtos/:id',
        controller: (request, response) => {
        return response.writeHead(201).end(`Produto deletado com sucesso, ID: ${request.params.id}`)
        }
    }
].map((route) => ({
    ...route,
    path: parseRoutePath(route.path)
}))