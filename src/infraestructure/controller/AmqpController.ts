import createMedico from '../../use-case/CreateMedico';
import updateField from '../../use-case/UpdateField';
import deleteMedico from '../../use-case/DeleteMedico';
import findMedicos from '../../use-case/FindMedicos';

export default {
    CreateMedico: async(payload:any) =>{
        const result = await createMedico(payload)
        return result
    },
    UpdateField: async(payload:any) =>{
        const result = await updateField(payload)
        return result
    },
    DeleteMedico: async(payload:any) =>{
        const result = await deleteMedico(payload)
        return result
    },
    FindMedicos: async(payload:any) =>{
        const result = await findMedicos(payload)
        return result
    },
}