const vaca_category_model =  require('../model/vaca_categoria')
const vaca_model =  require('../model/vacas')

class vacaCategory {

    constructor(idvaca,idcategoria,id_usuario){
        this.id_vaca = idvaca,
        this.id_categoria = idcategoria
        this.id_usuario = id_usuario
    }
    
    async createCategoria(vacaCategoria,idusuario) {
        try {
            return await vaca_category_model.bulkCreate(vacaCategoria)//game.create(usuario)
        } catch (error) {
            return error
        }
    }

    async listVacaCategory(idusuario,idCategoria) {
        try {
            return await vaca_category_model.findAll({
                where: {
                    id_usuario: idusuario,
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

    async findCategoryByIdVaca(id_vaca){
        try {
            return await vaca_category_model.findOne({where:{id_vaca:id_vaca}})//game.create(usuario)
        } catch (error) {
            return error
        }
    }

    async deleteVacaCategoria(idCategoria,idAnimal,idUsuario){
        try {
            return await vaca_category_model.destroy({where:{id_categoria:idCategoria,id_vaca:idAnimal,id_usuario:idUsuario}})//game.create(usuario)
        } catch (error) {
            return error
        }
    }

    async updateCategoria(Becerro){
        try {
            return await vaca_category_model.create(Becerro)//game.create(usuario)
        } catch (error) {
            return error
        }
    }
    async deleteVacaByIdVaca(idUsuario,idAnimal){
        try {
            await vaca_category_model.destroy({where:{id_usuario:idUsuario,id_vaca:idAnimal}})//game.create(usuario)
            return  {status:'ok'}
        } catch (error) {
            return error
        }
    }

    async listVacaUser(id_usuario) {
        try {
            return await vaca_category_model.findAll({
                where: {
                    id_usuario: id_usuario 
                }
            })
        } catch (error) {
            return error
        }
    }

}

module.exports = vacaCategory