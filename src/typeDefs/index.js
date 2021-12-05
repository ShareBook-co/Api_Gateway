const authTypeDefs       = require('./authTypeDefs')
const clienteTypeDefs    = require('./clienteTypeDefs')
const facturasTypesDefs  = require('./facturasTypeDefs')
const vendedorTypesDefs = require('./vendedorTypeDefs')

const schemasArray = [authTypeDefs, clienteTypeDefs, facturasTypesDefs, vendedorTypesDefs];

module.exports = schemasArray;