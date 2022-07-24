const db = require('../db/connection')
const {DataTypes}  = require('sequelize')

const Categoria = db.define('categorias', {
    id_usuario: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
}, {});
Categoria.associate = function(models) {
    // associations can be defined here
};

module.exports = Categoria