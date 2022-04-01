import { where } from "sequelize/types";
import { MedicoModel, IMedico } from "../database/sequelize/models/MedicoModel";
const Medicos = MedicoModel()

class repositoryMedico {
    public async create(entity: IMedico) {
        const result = await Medicos.create(entity)
        return result
    }
    public async updateByCrm(crm: number, field: any) {
        const result = await Medicos.update({ crm }, { where: { ...field } })
        return result
    }
    public async findByPk(crm: number) {
        //@ts-ignore
        const result = await Medicos.findByPk(crm, { where: { status: "Desativado" } })
        return result
    }
    public async findAll() {
        //@ts-ignore
        const result = await Medicos.findAll()
        return result
    }
    public async softlyDeleteByCrm(crm: number) {
        const result = await Medicos.update({ crm }, { where: { status: "Desativado" } })
        return result
    }
}
export default new repositoryMedico()