const Sequelize = require('sequelize')
var pgp = 'postgres://localhost:5432/boyoon'
var conn = new Sequelize(pgp)

module.exports = conn
