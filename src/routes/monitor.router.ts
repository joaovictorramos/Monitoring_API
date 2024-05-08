import { Router } from "express"
import MonitorController from "../controller/monitor.controller"

const control = new MonitorController()
const monitorRouter = Router()

monitorRouter.post("/monitor/create", control.post.bind(control))

export default monitorRouter