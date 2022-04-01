import { startServer } from "./src/infraestructure";
import { startDatabase } from "./src/database/sequelize";
import AmqpStarter from "./src/config/AmqpStarter";
import moment from "moment-timezone";
import env from './src/enviroment/env'
moment.tz.setDefault('America/Sao_Paulo')
try {
    const app = startServer(env.port)
    const database = startDatabase()
    // const amqp = AmqpStarter()
} catch (e) {
    console.log(e)
}