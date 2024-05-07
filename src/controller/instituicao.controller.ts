import { Request, Response, NextFunction } from "express"
import InstituicaoService from "../services/instituicao.service"

class InstituicaoController {
    private service = new InstituicaoService()

    async get(req: Request, res: Response, next: NextFunction){
        try {
            const { status, message } = await this.service.get()
            res.status(status).json(message)
        } catch (error) {
            next(error)
        }
    }
}

export default InstituicaoController