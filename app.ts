import { startServer } from "./src/infraestructure";
import moment from "moment-timezone";
import env from './src/enviroment/env'
moment.tz.setDefault('America/Sao_Paulo')
try {
    const app = startServer(env.port)
    if (app) {
        console.log(`Server listen at port: ${env.port}\nDatabase ${env.databaseName.toUpperCase()} conected\n${moment().format('DD/MMM/YYYY HH:mm')}`)
    }
} catch (e) {
    console.log(e)
}