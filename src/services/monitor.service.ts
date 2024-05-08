import { ModelStatic, Optional } from 'sequelize'
import Monitor from "../database/models/Monitor"
import resp from "../utils/resp"

class MonitorService{
    private model: ModelStatic<Monitor> = Monitor

    async create(monitor: Optional<any, string> | undefined){
        const monitorOut = await this.model.create(monitor)
        if (monitorOut == null){
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
        if (monitorOut == null){
            return await resp(204, "Not found monitor")
        }
        return await resp(200, monitorOut)
    }

    async findByRegistration(registration: string | undefined){
        const monitorOut = await this.model.findOne({
            where: {
                registration: registration
            }
        })
        if(monitorOut == null){
            return await resp(204, "Not found monitor")
        }
        return await resp(200, monitorOut)
    }

    async findAll(){
        const monitors = await this.model.findAll()
        if(monitors == null){
            return await resp(204, "Not found monitors")
        }
        return await resp(200, monitors)
    }
}

export default MonitorService