const becerro_category_model =  require('../model/becerro_categoria')
const becerro_model =  require('../model/becerros')

class becerroCategory {

    constructor(idbecerro,idcategoria, id_usuario){
        this.id_usuario = id_usuario,
        this.id_becerro = idbecerro,
        this.id_categoria = idcategoria
    }
    
    async createCategoria(becerroCategoria) {
        try {
            return await becerro_category_model.bulkCreate(becerroCategoria);//game.create(usuario)
        } catch (error) {
            return error
        }
    }

    async updateCategoria(Becerro){
        try {
            return await becerro_category_model.create(Becerro)//game.create(usuario)
        } catch (error) {
            return error
        }
    }

    async deleteBecerroCategoria(idCategoria,idAnimal,idUsuario){
        try {
            return await becerro_category_model.destroy({where:{id_categoria:idCategoria,id_becerro:idAnimal,id_usuario:idUsuario}})//game.create(usuario)
        } catch (error) {
            return error
        }
    }

    async listBecerroCategory(idusuario,idCategoria) {
        try {
            return await becerro_category_model.findAll({
                where: {
                    id_usuario: idusuario,
                    id_categoria: idCategoria 
                }
            })
        } catch (error) {
            return error
        }
    }

    async findByIdBecerro(idBecerro) {
        try {
            return await becerro_model.findByPk(idBecerro)
        } catch (error) {
            return error
        }
    }

    async findCategoryByIdBecerro(id_becerro){
        try {
            return await becerro_category_model.findOne({where:{id_becerro:id_becerro}})//game.create(usuario)
        } catch (error) {
            return error
        }
    }

    async findCategoryById(id){
        try {
            return await becerro_category_model.findOne({where:{id:id}})//game.create(usuario)
        } catch (error) {
            return error
        }
    }

    async deleteBecerrobyIdBecerro(idAnimal){
        try {
            await becerro_category_model.destroy({where:{id_becerro:idAnimal}})//game.create(usuario)
            return  {status:'ok'}
        } catch (error) {
            return error
        }
    }

    async listBecerros(id_usuario) {
        try {
            return await becerro_category_model.findAll({
                where: {
                    id_usuario: id_usuario 
                }
            })
        } catch (error) {
            return error
        }
    }
}

module.exports = becerroCategory