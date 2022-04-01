import { Router } from "express";
import createValidate from '../middleware/createValidator'
import controllerMedico from "../controller/controllerMedico";
const router = Router()

router.get('/listar', controllerMedico.find)

router.put('/atualizar/:id', controllerMedico.update)

router.post('/criar', createValidate, controllerMedico.create)

router.delete('/deletar/:id', controllerMedico.delete)


export default router