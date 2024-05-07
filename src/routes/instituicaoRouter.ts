import { Router } from "express"
import InstituicaoController from "../controller/instituicao.controller"

const control = new InstituicaoController()
const instituicaoRouter = Router()

instituicaoRouter.get('/instituicao', control.get.bind(control))

export default instituicaoRouter