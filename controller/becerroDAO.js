const becerros_model =  require('../model/becerros')

class becerros {

    constructor(id_usuario,nombre,descripcion){
        this.id_usuario = id_usuario
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

    async listBecerros(idUsuario) { //altgr + comilla inbertida
        try {
            return await becerros_model.findAll({ where: {id_usuario: idUsuario} })         
        } catch (error) {
            return error
        }
    }

}

module.exports = becerros