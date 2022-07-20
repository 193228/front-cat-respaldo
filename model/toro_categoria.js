const db = require('../db/connection')
const {DataTypes}  = require('sequelize')

const Toro_Categoria = db.define('toro_categoria', {
    id_toro: DataTypes.INTEGER,
    id_categoria: DataTypes.INTEGER,
}, {});
Toro_Categoria.associate = function(models) {
    // associations can be defined here
};

module.exports = Toro_Categoria