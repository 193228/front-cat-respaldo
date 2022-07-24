const becerro_category_model =  require('../model/becerro_categoria')
const becerro_model =  require('../model/becerros')

class becerroCategory {

    constructor(idbecerro,idcategoria){
        this.id_becerro = idbecerro,
        this.id_categoria = idcategoria
    }
    
    async createCategoria(becerroCategoria) {
        try {
            return await becerro_category_model.bulkCreate(becerroCategoria)//game.create(usuario)
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

    async deleteBecerroCategoria(idAnimal){
        try {
            return await becerro_category_model.destroy({where:{id:idAnimal}})//game.create(usuario)
        } catch (error) {
            return error
        }
    }

    async listBecerroCategory(idCategoria) {
        try {
            return await becerro_category_model.findAll({
                where: {
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
}

module.exports = becerroCategory