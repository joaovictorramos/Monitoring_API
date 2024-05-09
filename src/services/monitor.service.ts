import { ModelStatic, Optional } from 'sequelize'
import Monitor from "../database/models/Monitor"
import resp from "../utils/resp"

class MonitorService{
    private model: ModelStatic<Monitor> = Monitor

    async create(monitor: Optional<any, string> | undefined){
        const monitorOut = await this.model.create(monitor)
        if (!monitorOut){
            return await resp(400, "Unable to register monitor")
        }
        return await resp(201, monitorOut)
    }

    async findByName(name: string | undefined){
        const monitorOut = await this.model.findOne({
            where: {
                name: name
            }
        })
        if (!monitorOut){
            return await resp(404, "Not found monitor")
        }
        return await resp(200, monitorOut)
    }

    async findByRegistration(registration: string | undefined){
        const monitorOut = await this.model.findOne({
            where: {
                registration: registration
            }
        })
        if(!monitorOut){
            return await resp(404, "Not found monitor")
        }
        return await resp(200, monitorOut)
    }

    async findAll(){
        const monitors = await this.model.findAll()
        if(!monitors){
            return await resp(404, "Not found monitors")
        }
        return await resp(200, monitors)
    }

    async update(monitor: any | undefined, registration: string | undefined){
        try {
            const { status, message } = await this.findByRegistration(registration)
            
            if(!message){
                return await resp(404, "Not found monitor with this register")
            }
            const monitorOut = message as Monitor
            monitorOut.update(monitor)
            return await resp(200, "Monitor updated")
        } catch (error) {
            throw error
        } 
    }

    async delete(registration: string | undefined){
        try {
            const { status, message } = await this.findByRegistration(registration)
            if(!message){
                return await resp(404, "Not found monitor with this register")
            }
            const monitorOut = message as Monitor
            monitorOut.destroy()
            return await resp(200, "Monitor deleted")
        } catch (error) {
            throw error
        }
    }
}

export default MonitorService