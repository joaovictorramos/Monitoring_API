import { Request, Response, NextFunction } from "express"
import MonitorService from "../services/monitor.service"

class MonitorController{
    private service = new MonitorService()

    async post(req: Request, res: Response, next: NextFunction){
        console.log(req.body)
        const monitor = req.body
        try {
            const { status, message } = await this.service.post(monitor)
            res.status(status).json(message)
        } catch (error) {
            next(error)
        }
    }
}

export default MonitorController