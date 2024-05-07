import { Model } from 'sequelize'
import sequelize from 'sequelize'
import db from '.'

class Instituicao extends Model{
    declare id: number
    declare name: string
    declare principal: string
}

Instituicao.init({
    id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: sequelize.INTEGER,
    },
    name: {
        allowNull: true,
        type: sequelize.STRING,
    },
    principal: {
        allowNull: true,
        type: sequelize.STRING,
    }
}, { 
    timestamps: true,
    sequelize: db,
    tableName: 'instituicao'
})

export default Instituicao