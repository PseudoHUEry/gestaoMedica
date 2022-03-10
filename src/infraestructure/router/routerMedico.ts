import { Router } from "express";
const router = Router()

router.get('/listar', (req, res) => {
    res.status(200).send("/listar")
})

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