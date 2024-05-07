import { Model } from "sequelize"
import sequelize from "sequelize"
import db from "."

class Curso extends Model{
    declare id: number
    declare name: string
    declare period: number
}

Curso.init({
    id: {
        unique: true,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: sequelize.NUMBER
    },
    name: {
        allowNull: true,
        type: sequelize.STRING
    },
    period: {
        allowNull: true,
        type: sequelize.NUMBER
    }
}, {
    timestamps: true,
    sequelize: db,
    tableName: 'curso'
})

export default Curso