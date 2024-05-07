import { Router } from "express"
import instituicaoRouter from "./instituicaoRouter"

const router = Router()

router.use(instituicaoRouter)

export default router