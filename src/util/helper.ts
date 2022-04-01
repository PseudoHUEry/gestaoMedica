import { ICep } from '../database/sequelize/models/CepModel'
import axios from 'axios'
export const getCep = async (cep:number) => {
    const retrn = await axios(`https://viacep.com.br/ws/${cep}/json/`) as { status: number, data: ICep }
    return retrn
}