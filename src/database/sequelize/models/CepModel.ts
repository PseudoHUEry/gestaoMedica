import database from "..";
import {DataTypes, Model,BuildOptions , Sequelize} from 'sequelize'

export interface ICep {
    logradouro: string,
    cep: number,
    complemento: string,
    localidade: string,
    bairro: string,
    ibge: string,
    gia: string,
    ddd: string,
    siafi: string,
}
export interface CepModel extends Model<ICep>, ICep{}
export class Cep extends Model<CepModel, ICep>{}
export type CepStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): CepModel;
};
const schema = {
    cep: {
        type: DataTypes.INTEGER(),
        allowNull: false,
        primaryKey: true,
    },
    logradouro: {
        type: DataTypes.STRING(120),
        allowNull: false
    },
    complemento: {
        type: DataTypes.STRING(120),
        allowNull: false
    },
    localidade: {
        type: DataTypes.STRING(120),
        allowNull: false
    },
    bairro: {
        type: DataTypes.STRING(120),
        allowNull: false
    },
    ibge: {
        type: DataTypes.STRING(120),
        allowNull: false
    },
    gia: {
        type: DataTypes.STRING(120),
        allowNull: false
    },
    ddd: {
        type: DataTypes.STRING(120),
        allowNull: false
    },
    siafi: {
        type: DataTypes.STRING(120),
        allowNull: false
    }
}
export const CepModel = ()=>{ 
    return <CepStatic>database.define('cep', schema)
}