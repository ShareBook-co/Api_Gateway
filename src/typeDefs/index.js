const authTypeDefs       = require('./authTypeDefs')
const booksTypeDefs      = require('./booksTypeDefs')
const clienteTypeDefs    = require('./clienteTypeDefs')
const facturasTypesDefs  = require('./facturasTypeDefs')
const vendedorTypesDefs = require('./vendedorTypeDefs')

const schemasArray = [authTypeDefs, booksTypeDefs, clienteTypeDefs, facturasTypesDefs, vendedorTypesDefs];

module.exports = schemasArray;