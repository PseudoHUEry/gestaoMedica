import { MedicoModel } from "../database/sequelize/models/MedicoModel";
const Medicos = MedicoModel()

 class repositoryMedico {
    public async create(entity: any) {
        const result = await Medicos.create(entity)
        return result
    }
}
export default new repositoryMedico()