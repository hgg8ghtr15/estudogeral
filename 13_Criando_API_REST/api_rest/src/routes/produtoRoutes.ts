import { Router } from "express";
import { myMiddleware } from "../middlewares/my-middleware.js";

const produtoRoutes = Router();

produtoRoutes.get("/:id", (req, res) => {
    const { id } = req.params;
    const {page, limite} = req.query;

    console.log(`ID do produto: ${id}`);
    console.log(`Página: ${page}`);
    console.log(`Limite: ${limite}`);

    return res.send(`Produto ID: ${id}`);
})

produtoRoutes.post("/", myMiddleware, (req, res) => {
    const { nome, preco } = req.body;
    console.log(`ID do usuário: ${req.user_id}`);
    return res.status(201).json({ nome, preco });
})

export { produtoRoutes };