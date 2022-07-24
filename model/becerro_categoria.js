const db = require('../db/connection')
const {DataTypes}  = require('sequelize')

const Becerro_Categoria = db.define('becerro_categoria', {
    id_usuario: DataTypes.INTEGER,
    id_becerro: DataTypes.INTEGER,
    id_categoria: DataTypes.INTEGER,
}, {});
Becerro_Categoria.associate = function(models) {
    // associations can be defined here
};

module.exports = Becerro_Categoria