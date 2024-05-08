import { Model } from 'sequelize'
import sequelize from 'sequelize'
import { v4 as uuid4 } from 'uuid' 
import db from '.'

class Monitor extends Model{
    declare id: string
    declare registration: string
    declare name: string
    declare actualPeriod: number
    declare institutionalEmail: string
    declare typeOfMonitoring: string
    declare startHour: string
    declare endHour: string
    declare createdAt: Date
    declare updatedAt: Date
}

Monitor.init({
    id: {
        unique: true,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: sequelize.UUIDV4
    },
    registration: {
        unique: true,
        allowNull: false,
        type: sequelize.STRING
    },
    name: {
        unique: true,
        allowNull: false,
        type: sequelize.STRING
    },
    actualPeriod: {
        type: sequelize.INTEGER
    },
    institutionalEmail: {
        allowNull: false,
        type: sequelize.STRING
    },
    typeOfMonitoring: {
        type: sequelize.STRING
    },
    startHour: {
        type: sequelize.STRING
    },
    endHour: {
        type: sequelize.STRING
    },
    createdAt: {
        type: sequelize.DATE
    },
    updatedAt: {
        type: sequelize.DATE
    }
}, {
    timestamps: true,
    sequelize: db,
    tableName: 'monitor'
})

Monitor.beforeCreate((monitor, _) => {
    monitor.id = uuid4();
});

Monitor.beforeUpdate((monitor, _) => {
    monitor.id = uuid4();
});

export default Monitor