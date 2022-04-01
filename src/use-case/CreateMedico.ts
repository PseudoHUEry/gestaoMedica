import { IMedico } from '../database/sequelize/models/MedicoModel'
import { ICep } from '../database/sequelize/models/CepModel'
import repositoryCep from '../repository/repositoryCep'
import repositoryMedico from '../repository/repositoryMedico'
import { getCep } from '../util/helper'

export default async (payload: IMedico) => {
    try {
        const retrn = await getCep(payload.cep)
        if (retrn.status === 200 && !Object.keys(payload).includes('error')) {

            const [resultMedico, resultCep] = await Promise.all([
                repositoryMedico.create(payload),
                repositoryCep.create(retrn.data)
            ])

            return {
                status: 200,
                data: {
                    response: { ...resultMedico }
                }
            }
        } else {
            return {
                status: 404,
                data: {
                    messagem: "Favor verificar CEP!"
                }
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