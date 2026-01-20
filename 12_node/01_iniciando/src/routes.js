import { parseRoutePath } from './utils/parseRoutePath.js'
export const routes = [
    {
        method: 'GET',
        path: '/produtos',
        controller: ({request, response, database}) => {
            const produtos = database.select('products')
            console.log(request.query)
            return response.writeHead(200).end(JSON.stringify(produtos))
        }
    },
    {
        method: 'POST',
        path: '/produtos',
        controller: ({request, response, database}) => {
            const {name, valor} = request.body
            database.insert('products', {name, valor})
            return response.writeHead(201).end(`O Produto ${name} adicionado com sucesso!`)
        }
    },
    {
        method: 'DELETE',
        path: '/produtos/:id',
        controller: ({request, response}) => {
        return response.writeHead(201).end(`Produto deletado com sucesso, ID: ${request.params.id}`)
        }
    }
].map((route) => ({
    ...route,
    path: parseRoutePath(route.path)
}))