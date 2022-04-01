import { startServer } from "./src/infraestructure";
import { startDatabase } from "./src/database/sequelize";
import moment from "moment-timezone";
import env from './src/enviroment/env'
moment.tz.setDefault('America/Sao_Paulo')
try {
    const app = startServer(env.port)
    const database = startDatabase()
} catch (e) {
    console.log(e)
}