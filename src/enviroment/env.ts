import 'dotenv/config'
import { Dialect } from 'sequelize/types'
export default {
    port: process.env.PORT || 3000,
    databaseName: process.env.DATABASE_NAME ?? "teste" as string,
    databaseUser: process.env.DATABASE_USER as string,
    databasePass: process.env.DATABASE_PASSWORD as string,
    databaseDialect: process.env.DATABASE_DIALECT as Dialect,
    databaseAcess: process.env.DATABASE_ACESS as string,
    databasePort: process.env.DATABASE_PORT as string
}