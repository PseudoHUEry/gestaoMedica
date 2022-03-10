import { startServer } from "./src/infraestructure";
import moment from "moment-timezone";
import env from './src/enviroment/env'
moment.tz.setDefault('America/New_York')
try {
    const app = startServer(env.PORT)


    if (app) {
        console.log(`Server listen at port: ${env.PORT}\n${moment().format('DD/MMM/YYYY HH:mm')}`)
    }
} catch (e) {

}