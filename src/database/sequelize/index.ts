import { Sequelize } from 'sequelize'
import env from '../../enviroment/env'
const database = new Sequelize(env.databaseName, env.databaseUser, env.databasePass, {
    dialect: env.databaseDialect,
    port: Number(env.databasePort)
})


export default database

export const startDatabase = async () => {
    try {
        await database.sync()
        return true
    } catch (e) {
        console.log(e)
        return false
    }
}