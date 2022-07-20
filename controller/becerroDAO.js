const becerros_model =  require('../model/becerros')

class becerros {

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

    async listBecerros() { //altgr + comilla inbertida
        try {
            return await becerros_model.findAll()         
        } catch (error) {
            return error
        }
    }

}

module.exports = becerros