import { type Request, type Response } from "express";
import { AppError } from "../utils/AppError.js";

export class ProdutoController {
  /**
   * index - GET para listar varios produtos
   * show - GET exibir apenas um produto
   * create - POST para criar um produto
   * update - PUT para atualizar um produto
   * remove - DELETE para remover um produto
   */

  index(req: Request, res: Response) {
    const { id } = req.params;
    const { page, limite } = req.query;

    console.log(`ID do produto: ${id}`);
    console.log(`Página: ${page}`);
    console.log(`Limite: ${limite}`);

    return res.send(`Produto ID: ${id}`);
  }


  create(req: Request, res: Response) {
    const { nome, preco } = req.body;

    if (!nome) {
        throw new AppError("Nome é obrigatório", 401);
    }
    // throw new Error("Erro ao criar um produto");
    //throw new AppError("Erro ao criar um produto");

    console.log(`ID do usuário: ${req.user_id}`);
    return res.status(201).json({ nome, preco });
  }
}
