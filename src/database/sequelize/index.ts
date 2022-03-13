import { Sequelize } from 'sequelize'
import env from '../../enviroment/env'
const database = new Sequelize(env.databaseName, env.databaseUser, env.databasePass, {
    dialect: env.databaseDialect
})


export default database

export const startDatabase = async() =>{
    await database.sync()
    return true
}