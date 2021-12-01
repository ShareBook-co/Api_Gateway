const authTypeDefs       = require('./authTypeDefs')
const booksTypeDefs      = require('./booksTypeDefs')
const clienteTypeDefs    = require('./clienteTypeDefs')
const facturasTypesDefs  = require('./facturasTypesDefs')
const vendedorsTypesDefs = require('./vendedorsTypesDefs')

const schemasArray = [authTypeDefs, booksTypeDefs, clienteTypeDefs, facturasTypesDefs, vendedorsTypesDefs];

module.exports = schemasArray;