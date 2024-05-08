import { ModelStatic, Optional } from 'sequelize'
import Monitor from "../database/models/Monitor"
import resp from "../utils/resp"
import { v4 as uuid4 } from 'uuid' 

class MonitorService{
    private model: ModelStatic<Monitor> = Monitor

    async post(monitor: Optional<any, string> | undefined){
        const monitorOut = await this.model.create(monitor)
        if (monitorOut == null){
            return resp(400, "Unable to register monitor")
        }
        return resp(201, monitorOut)
    }
}

export default MonitorService