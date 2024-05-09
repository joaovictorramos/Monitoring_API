import { Request, Response, NextFunction } from "express"
import MonitorService from "../services/monitor.service"

class MonitorController{
    private service = new MonitorService()

    async create(req: Request, res: Response, next: NextFunction){
        const monitor = req.body
        try {
            const { status, message } = await this.service.create(monitor)
            res.status(status).json(message)
        } catch (error) {
            next(error)
        }
    }

    async findByRegistration(req: Request, res: Response, next: NextFunction){
        const registration = req.query.registration?.toString()
        try {
            const { status, message } = await this.service.findByRegistration(registration)
            res.status(status).json(message)
        } catch (error) {
            next(error)
        }
    }

    async findByName(req: Request, res: Response, next: NextFunction){
        const name = req.query.name?.toString()
        console.log("name")
        try {
            const { status, message } = await this.service.findByName(name)
            res.status(status).json(message)
        } catch (error) {
            next(error)
        }
    }

    async findAll(req: Request, res: Response, next: NextFunction){
        try {
            const {status, message} = await this.service.findAll()
            res.status(status).json(message)
        } catch (error) {
            next(error)
        }
    }

    async update(req: Request, res: Response, next: NextFunction){
        const monitor = req.body
        const registration = req.query.registration?.toString()

        try {
            const { status, message } = await this.service.update(monitor, registration)
            res.status(status).json(message)
        } catch (error) {
            next(error)
        }
    }

    async delete(req: Request, res: Response, next: NextFunction){
        const registration = req.query.registration?.toString()

        try {
            const { status, message } = await this.service.delete(registration)
            res.status(status).json(message)
        } catch (error) {
            next(error)
        }
    }
}

export default MonitorController