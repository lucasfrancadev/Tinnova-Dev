const Eleicao = require('../models/Eleicao')

module.exports = {
    async percentualVotos(request, response) {
        try {
            const {totalEleitores, votosValidos, votosBrancos, votosNulos} = request.body
            
            const Votos = await new Eleicao(
                totalEleitores,
                votosValidos,
                votosBrancos,
                votosNulos,
            );

            const getVotosValidos = Votos.percentualVotosValidos()
            const getVotosBrancos = Votos.percentualVotosBrancos() 
            const getVotosNulos = Votos.percentualVotosNulos()

            console.log(`Percentual de votos válidos: ${getVotosValidos}`)
            console.log(`Percentual de votos brancos: ${getVotosBrancos}`)
            console.log(`Percentual de votos nulos: ${getVotosNulos}`)
            return response.json(Votos)
        } catch (error) {
            console.log(error)
        }
    }
}