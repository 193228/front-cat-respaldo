const toro_model =  require('../model/toros')

class toros {

    constructor(nombre,descripcion,id_usuario){
        this.nombreCategoria = nombre,
        this.descripcionCategoria = descripcion,
        this.id_usuario = id_usuario
    }
    
    async createCategoria(categoria) {
        try {
            return await Categoria.create(categoria)//game.create(usuario)
        } catch (error) {
            return error
        }
    }

    async listToros(idUsuario) { //altgr + comilla inbertida
        try {
            return await toro_model.findAll({ where: {id_usuario: idUsuario} })            
        } catch (error) {
            return error
        }
    }

}

module.exports = toros
