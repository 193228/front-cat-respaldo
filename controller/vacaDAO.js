const vaca_model =  require('../model/vacas')

class vacas {

    constructor(nombre,descripcion){
        this.nombreCategoria = nombre,
        this.descripcionCategoria = descripcion
    }
    
    async createCategoria(categoria) {
        try {
            return await Categoria.create(categoria)//game.create(usuario)
        } catch (error) {
            return error
        }
    }

    async listVacas() { //altgr + comilla inbertida
        try {
            return await vaca_model.findAll()         
        } catch (error) {
            return error
        }
    }

}

module.exports = vacas