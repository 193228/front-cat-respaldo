const { Sequelize } = require('sequelize');

const db = new Sequelize(process.env.DATABASE, process.env.USERDB, process.env.PASSWORD_DB, {
    host: process.env.HOSTDB,
    dialect: process.env.DIALECT,
    query:{
        raw:true
      },
    define: {
        timestamps: false
    },
    raw: true,
    plain: true
});

module.exports = db;