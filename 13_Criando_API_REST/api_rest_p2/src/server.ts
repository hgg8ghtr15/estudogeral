import express from "express";
import { routes } from "./routes/index.js";
import { type Request, type Response, type NextFunction } from "express";
import { ZodError, z } from "zod";

import { AppError } from "./utils/AppError.js";

const PORT = 3000;
const app = express();

app.use(express.json());

app.use(routes);


/**
 * 400 Middleware de tratamento de erros dos clientes (bad request)
 * 500 Middleware de tratamento de erros do servidor ( internal server error )
 */
app.use((error:any, req:Request, res:Response, next:NextFunction) => {
    if(error instanceof AppError) {
        return res.status(error.statusCode).json({ message: error.message });
    }

    if(error instanceof ZodError) {
        return res.status(400).json({message: "validação falhou", issues: z.treeifyError(error)});
    }

    res.status(500).json({ message: error.message });
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
