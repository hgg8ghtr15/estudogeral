import { Router } from "express";

import { produtoRoutes } from "./produtoRoutes.js"

const routes = Router();

routes.use("/produto", produtoRoutes);

export { routes };