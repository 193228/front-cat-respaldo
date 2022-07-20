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

    async updateCategoria(listaBecerros,id){
        try {
            return await becerro_category_model.upsert(listaBecerros
            )//game.create(usuario)
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

}

module.exports = becerroCategory