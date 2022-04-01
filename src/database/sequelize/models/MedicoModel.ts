import database from "..";
import {DataTypes, Model,BuildOptions , Sequelize} from 'sequelize'

export interface IMedico {
    crm: number,
    cep: number,
    nomeMedico: string,
    telefone: number,
    telefoneCelular: number,
    especialidades: ['Alergologia' |
        'Angiologia' |
        'Buco maxilo' |
        'Cardiologia clínca' |
        'Cardiologia infantil' |
        'Cirurgia cabeça e pescoço' |
        'Cirurgia cardíaca' |
        'Cirurgia de tórax']
    status?: "Ativo" | "Desativado"
}
export interface MedicoModel extends Model<IMedico>, IMedico{}
export class Medico extends Model<MedicoModel, IMedico>{}
export type MedicoStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): MedicoModel;
};
const schema = {
    crm: {
        type: DataTypes.INTEGER(),
        allowNull: false,
        primaryKey: true,
    },
    cep: {
        type: DataTypes.INTEGER(),
        allowNull: false,
        primaryKey: true,
    },
    nomeMedico: {
        type: DataTypes.STRING(120),
        allowNull: false
    },
    telefone: {
        type: DataTypes.INTEGER()
    },
    telefoneCelular: {
        type: DataTypes.INTEGER(),
        allowNull: false,
    },
    especialidades: {
        type: DataTypes.ENUM,
        values: ['Alergologia',
            'Angiologia',
            'Buco maxilo',
            'Cardiologia clínca',
            'Cardiologia infantil',
            'Cirurgia cabeça e pescoço',
            'Cirurgia cardíaca',
            'Cirurgia de tórax']
    },
    status: {
        type: DataTypes.ENUM,
        values: ["Ativo", "Desativado"],
        default: "Ativo"
    }
}
export const MedicoModel = ()=>{ 
    return <MedicoStatic>database.define('medico', schema)
}