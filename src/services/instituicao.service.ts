import { ModelStatic } from 'sequelize'
import Instituicao from '../database/models/Instituicao'
import resp from '../utils/resp'

class InstituicaoService{
    private model: ModelStatic<Instituicao> = Instituicao

    async get(){
        const instituicoes = await this.model.findAll()
        return resp(200, instituicoes)
    }
}

export default InstituicaoService