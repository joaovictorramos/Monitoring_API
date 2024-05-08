import { Router } from "express"
import monitorRouter from "./monitor.router"

const router = Router()

router.use(monitorRouter)

export default router