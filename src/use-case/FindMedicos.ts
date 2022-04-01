import repositoryMedico from '../repository/repositoryMedico'



export default async (payload?: { crm: number }) => {
    try {
        let result
        if (payload?.crm) {
            result = await repositoryMedico.findByPk(payload.crm)

        } else {
            result = await repositoryMedico.findAll()

        }
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