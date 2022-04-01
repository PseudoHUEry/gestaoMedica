import repositoryMedico from '../repository/repositoryMedico'

export default async (payload: { crm: number }) => {
    try {
        const result = await repositoryMedico.softlyDeleteByCrm(payload.crm)
        return {
            status: 200,
            data: {
                response: { ...result }
            }
        }

    } catch (e) {
        return {
            status: 500,
            data: {
                messagem: e
            }
        }
    }
}