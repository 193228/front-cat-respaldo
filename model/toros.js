const db = require('../db/connection')
const {DataTypes}  = require('sequelize')

const Toro = db.define('toros', {
    id_usuario: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    raza: DataTypes.STRING,
    num_arete: DataTypes.STRING,
    url_img: DataTypes.STRING,
    estado: DataTypes.INTEGER,
    fecha_llegada: DataTypes.STRING,
    edad: DataTypes.INTEGER
}, {});
Toro.associate = function(models) {
    // associations can be defined here
};

module.exports = Toro