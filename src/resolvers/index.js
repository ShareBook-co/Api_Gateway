const authResolver = require('./authResolver')
const booksResolver = require('./booksResolver')
const facturasResolver = require('./facturasResolver')
const usersResolver = require('./usersResolver')
const lodash = require('lodash')

const resolvers = lodash.merge(authResolver, booksResolver, facturasResolver, usersResolver);
module.exports = resolvers;