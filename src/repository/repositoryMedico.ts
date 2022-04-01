import { MedicoModel, IMedico } from "../database/sequelize/models/MedicoModel";
const Medicos = MedicoModel()

class repositoryMedico {
    public async create(entity: IMedico) {
        const result = await Medicos.create(entity)
        return result
    }
    public async updateByCrm(crm: number, field: any) {
        const result = await Medicos.findByPk(crm, field)
        return result
    }
}
export default new repositoryMedico()