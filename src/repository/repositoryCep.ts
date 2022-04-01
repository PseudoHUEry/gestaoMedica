import { CepModel, ICep } from "../database/sequelize/models/CepModel";
const Ceps = CepModel()

class repositoryCep {
    public async create(entity: ICep) {
        const result = await Ceps.create(entity)
        return result
    }
    public async find(cep: number) {
        //@ts-ignore
        const result = await Ceps.find({cep: cep})
        return result
    }
}
export default new repositoryCep()