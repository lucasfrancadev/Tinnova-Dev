module.exports = {
    async getFatorial(request, response){
        let {number} = request.body
        let fatorial = number

        while(number > 1){
            fatorial = fatorial * (number - 1)
            number = number - 1
            if (number === 1){
                try{
                    console.log(`Fatorial: ${fatorial}`)
                    return response.json(`Fatorial: ${fatorial}`)
                } catch (error) {
                    console.log(error)
                }
            }
        }
    }
}
