const db = require('../db/connection')
const {DataTypes}  = require('sequelize')

const Vaca_Categoria = db.define('vaca_categoria', {
    id_vaca: DataTypes.INTEGER,
    id_categoria: DataTypes.INTEGER,
}, {});
Vaca_Categoria.associate = function(models) {
    // associations can be defined here
};

module.exports = Vaca_Categoria