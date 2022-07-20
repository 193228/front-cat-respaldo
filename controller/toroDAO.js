const toro_model =  require('../model/toros')

class toros {

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

    async listToros() { //altgr + comilla inbertida
        try {
            return await toro_model.findAll()            
        } catch (error) {
            return error
        }
    }

}

module.exports = toros
