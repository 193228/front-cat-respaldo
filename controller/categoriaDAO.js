const categoria_model = require('../model/categorias')

class categorias {

    constructor(id_usuario,nombre,descripcion){
        this.id_usuario = id_usuario
        this.nombre = nombre,
        this.descripcion = descripcion
    }
    
    async createCategoria(categoria) {
        try {
            return await categoria_model.create(categoria)
        } catch (error) {
            return error
        }
    }

    async listCategorias(idusuario) { //altgr + comilla inbertida
        try {
            return await categoria_model.findAll({ where: {id_usuario: idusuario} })         
        } catch (error) {
            return error
        }
    }

    async getCategoryByName(nombre){
        try {
            return await categoria_model.findOne({ where: { nombre: nombre } })
        } catch (error) {
            return error
        }
    }

    async getCategoryById(id){
        try {
            return await categoria_model.findByPk(id);
        } catch (error) {
            return error
        }
    }

    async deleteCategoryById(idusuario,idcategoria){
        try {
            return await categoria_model.destroy({ where: {id:idcategoria, id_usuario: idusuario} });
        } catch (error) {
            return error
        }
    }

    async updateCategory(category, idusuario,idcategoria){
        try {
            return await categoria_model.update(category,{ where: { id:idcategoria, id_usuario:idusuario } });
        } catch (error) {
            return error
        }
    }

}

module.exports = categorias