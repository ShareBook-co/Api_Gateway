const authResolver = require('./authResolver')
const facturasResolver = require('./facturasResolver')
const usersResolver = require('./usersResolver')
const lodash = require('lodash')

const resolvers = lodash.merge(authResolver, facturasResolver, usersResolver);
module.exports = resolvers;