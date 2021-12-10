const authTypeDefs       = require('./authTypeDefs')
const clienteTypeDefs    = require('./clienteTypeDefs')
const facturasTypesDefs  = require('./facturasTypeDefs')
const vendedorTypesDefs  = require('./vendedorTypeDefs')
const bookTypesDefs      = require('./bookTypeDefs')

const schemasArray = [authTypeDefs, clienteTypeDefs, facturasTypesDefs, vendedorTypesDefs, bookTypesDefs];

module.exports = schemasArray;