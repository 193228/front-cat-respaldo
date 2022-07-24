const vaca_model =  require('../model/vacas')

class vacas {

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

    async listVacas() { //altgr + comilla inbertida
        try {
            return await vaca_model.findAll({ where: {id_usuario: idusuario} })         
        } catch (error) {
            return error
        }
    }

}

module.exports = vacas