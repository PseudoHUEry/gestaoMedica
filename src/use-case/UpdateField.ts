import { IMedico } from '../database/sequelize/models/MedicoModel'
import { ICep } from '../database/sequelize/models/CepModel'
import repositoryCep from '../repository/repositoryCep'
import repositoryMedico from '../repository/repositoryMedico'
import { getCep } from '../util/helper'



export default async (payload: { crm: number, field: Partial<IMedico> }) => {
    try {
        if (payload.field?.cep) {
            const teste = await repositoryCep.find(payload.field?.cep)
            if (teste.lenght > 0) {
                const retrn = await getCep(payload.field?.cep)
                await repositoryCep.create(retrn.data)
            }
        }
        const result = await repositoryMedico.updateByCrm(payload.crm, payload.field)
        return {
            status: 200,
            data: {
                response: { ...result }
            }
        }

    } catch (e) {
        return {
            status: 500,
            data: {
                messagem: e
            }
        }
    }
}