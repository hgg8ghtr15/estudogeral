import { parseRoutePath } from "./utils/parseRoutePath.js"

export const routes = [
    {
        method: 'GET',
        path: '/produtos',
        controller: (req, res) => {
            return res.end(JSON.stringify(req.query))
        }
    },
    {
        method: 'POST',
        path: '/produtos',
        controller: (req, res) => {
            // console.log(req.body)
            // Simula a criação de um produto
            return res.writeHead(201).end(JSON.stringify(req.body))
        }
    },
    {
        method: 'DELETE',
        path: '/produtos/:id',
        controller: (req, res) => {
            // console.log(req.body)
            return res.end(`Produto ${req.params.id} deletado com sucesso!`)
        }
    }
]
.map((route) =>({
    ...route,
    path: parseRoutePath(route.path)
}))