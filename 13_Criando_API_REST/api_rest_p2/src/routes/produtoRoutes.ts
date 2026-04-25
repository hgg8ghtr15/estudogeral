import { Router } from "express";
import { myMiddleware } from "../middlewares/my-middleware.js";
import { ProdutoController } from "../controllers/ProdutoController.js";

const produtoRoutes = Router();
const produtoController = new ProdutoController();

produtoRoutes.get("/:id", (req, res) => {
  produtoController.index(req, res);
});

produtoRoutes.post("/", myMiddleware, (req, res) => {
  produtoController.create(req, res);
});

export { produtoRoutes };