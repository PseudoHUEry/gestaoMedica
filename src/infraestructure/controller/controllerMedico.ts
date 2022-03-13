import repositoryMedico from "../../repository/repositoryMedico"
export default {
    index: async (req: any, res: any) => {
        try {
            const teste = {
                crm: Math.random() * 1000,
                cep: 123,
                nomeMedico: 'aaaa',
                telefone: 123,
                telefoneCelular: 123,
                especialidades: ['Alergologia', 'Angiologia', 'Buco maxilo']

            }
            const result = await repositoryMedico.create(teste)
            res.json(result)
        } catch (e) {
            console.log(e)
        }
    }
}