import createMedico from '../../use-case/CreateMedico';
import updateField from '../../use-case/UpdateField';
import deleteMedico from '../../use-case/DeleteMedico';
import findMedicos from '../../use-case/FindMedicos';

import { Request, Response } from 'express'
import { validationResult } from "express-validator";

export default {
    //@ts-ignore
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
            const payload = { crm: Number(req.params?.id), field: req?.body }
            const result = await updateField(payload)
            res.status(result.status).json({ ...result.data })
        } catch (e) {
            console.log(e)
        }
    },
    delete: async (req: Partial<Request>, res: Response) => {
        try {
            const payload = { crm: Number(req.params?.id) }
            const result = await deleteMedico(payload)
            res.status(result.status).json({ ...result.data })
        } catch (e) {
            console.log(e)
        }
    },
    find: async (req: Partial<Request>, res: Response) => {
        try {
            const payload = { crm: Number(req.params?.id) }
            const result = await findMedicos(payload)
            res.status(result.status).json({ ...result.data })
        } catch (e) {
            console.log(e)
        }
    },
}