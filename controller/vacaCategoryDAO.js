const vaca_category_model =  require('../model/vaca_categoria')
const vaca_model =  require('../model/vacas')

class vacaCategory {

    constructor(idvaca,idcategoria){
        this.id_vaca = idvaca,
        this.id_categoria = idcategoria
    }
    
    async createCategoria(vacaCategoria) {
        try {
            return await vaca_category_model.bulkCreate(vacaCategoria)//game.create(usuario)
        } catch (error) {
            return error
        }
    }

    async listVacaCategory(idCategoria) {
        try {
            return await vaca_category_model.findAll({
                where: {
                    id_categoria: idCategoria 
                }
            })
        } catch (error) {
            return error
        }
    }

    async findByIdVaca(idVaca) {
        try {
            return await vaca_model.findByPk(idVaca)
        } catch (error) {
            return error
        }
    }

}

module.exports = vacaCategory