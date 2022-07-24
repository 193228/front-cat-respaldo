const toro_category_model =  require('../model/toro_categoria')
const toro_model =  require('../model/toros')

class toroCategory {

    constructor(idtoro,idcategoria,id_usuario){
        this.id_toro = idtoro,
        this.id_categoria = idcategoria
        this.id_usuario = id_usuario
    }
    
    async createCategoria(toroCategoria,idusuario) {
        try {
            return await toro_category_model.bulkCreate(toroCategoria)//game.create(usuario)
        } catch (error) {
            return error
        }
    }

    async listToroCategory(idusuario,idCategoria) {
        try {
            return await toro_category_model.findAll({
                where: {
                    id_usuario: idusuario,
                    id_categoria: idCategoria 
                }
            })
        } catch (error) {
            return error
        }
    }

    async findByIdToro(idToro) {
        try {
            return await toro_model.findByPk(idToro)
        } catch (error) {
            return error
        }
    }

    async findCategoryByIdToro(id_toro){
        try {
            return await toro_category_model.findOne({where:{id_toro:id_toro}})//game.create(usuario)
        } catch (error) {
            return error
        }
    }

    async deleteToroCategoria(idCategoria,idAnimal,idUsuario){
        try {
            return await toro_category_model.destroy({where:{id_categoria:idCategoria,id_toro:idAnimal,id_usuario:idUsuario}})//game.create(usuario)
        } catch (error) {
            return error
        }
    }

    async updateCategoria(toro){
        try {
            return await toro_category_model.create(toro)//game.create(usuario)
        } catch (error) {
            return error
        }
    }

    async deleteTorobyIdToro(idAnimal){
        try {
            await toro_category_model.destroy({where:{id_toro:idAnimal}})//game.create(usuario)
            return  {status:'ok'}
        } catch (error) {
            return error
        }
    }

    async listToros(id_usuario) {
        try {
            return await toro_category_model.findAll({
                where: {
                    id_usuario: id_usuario 
                }
            })
        } catch (error) {
            return error
        }
    }


}

module.exports = toroCategory