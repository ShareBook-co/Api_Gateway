const authResolver = require('./authResolver')
const facturasResolver = require('./facturasResolver')
const usersResolver = require('./usersResolver')
const booksResolver = require('./bookResolver')
const lodash = require('lodash')

const resolvers = lodash.merge(authResolver, facturasResolver, usersResolver, booksResolver);
module.exports = resolvers;