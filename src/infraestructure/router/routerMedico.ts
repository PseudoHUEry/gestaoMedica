import { Router } from "express";
import controllerMedico from "../controller/controllerMedico";
const router = Router()

router.get('/listar', controllerMedico.index)

router.put('/atualizar/:id', (req, res) => {
    res.status(200).send("/atualizar")

})

router.post('/criar', (req, res) => {
    res.status(200).send("/criar")

})

router.delete('/deletar/:id', (req, res) => {
    res.status(200).send("/deletar")
})


export default router