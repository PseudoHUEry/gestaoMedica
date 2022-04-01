import { validationResult, body } from "express-validator";
export default [
    body('crm').isNumeric().isLength({ min: 7 }).notEmpty(),
    body('cep').isLength({ min: 8 }).notEmpty(),
    body('nomeMedico').isLength({ min: 120 }).notEmpty(),
    body('telefone').isNumeric().notEmpty(),
    body('telefoneCelular').isNumeric().notEmpty(),
    body('especialidades').isLength({ min: 7 }).notEmpty()
]