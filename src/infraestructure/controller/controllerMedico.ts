import createMedico from '../../use-case/createMedico';
import { Request, Response } from 'express'
import { validationResult } from "express-validator";

export default {
    create: async (req: Partial<Request>, res: Response) => {
        try {
            const errors = validationResult(req)
            if (errors) {
                return res.status(400).json({ errors: errors.array() })
            }
            const payload = req?.body
            const result = await createMedico(payload)
            res.status(result.status).json({ ...result.data })
        } catch (e) {
            console.log(e)
        }
    },
    update: async (req: Partial<Request>, res: Response) => {
        try {
            const payload = req?.body
            const result = await createMedico(payload)
            res.status(result.status).json({ ...result.data })
        } catch (e) {
            console.log(e)
        }
    }
}