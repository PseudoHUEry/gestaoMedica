import express from "express"
import routerMedico from './router/routerMedico'
export const startServer = (port: number | string | undefined) => {
    const app = express()

    app.use('/medico', routerMedico)
    app.use((req, res) => {
        res.status(404).send({
            error: `Rota inexistente, verifique a documentação.`
        })
    })
    app.listen(port)
    return true
}