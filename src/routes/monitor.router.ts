import { Router } from "express"
import MonitorController from "../controller/monitor.controller"

const control = new MonitorController()
const monitorRouter = Router()

monitorRouter.post("/monitor/create", control.create.bind(control))
monitorRouter.get("/monitor/search/name/:name?", control.findByName.bind(control))
monitorRouter.get("/monitor/search/registration/:registration?", control.findByRegistration.bind(control))
monitorRouter.get("/monitor/searchAll", control.findAll.bind(control))
monitorRouter.put("/monitor/update/:registration?", control.update.bind(control))
monitorRouter.delete("/monitor/delete/:registration?", control.delete.bind(control))

export default monitorRouter