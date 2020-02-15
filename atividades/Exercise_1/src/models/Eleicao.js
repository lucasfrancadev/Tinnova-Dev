module.exports = class Eleicao {
    constructor(totalEleitores, votosValidos, votosBrancos, votosNulos) {
        this.totalEleitores = totalEleitores;
        this.votosValidos = votosValidos;
        this.votosBrancos = votosBrancos;
        this.votosNulos = votosNulos;
    }

    percentualVotosValidos() {
        const percentual = this.votosValidos / this.totalEleitores
        return percentual * 100
    }

    percentualVotosBrancos() {
        const percentual = this.votosBrancos / this.totalEleitores
        return percentual * 100
    }

    percentualVotosNulos() {
        const percentual = this.votosNulos / this.totalEleitores
        return percentual * 100
    }
}