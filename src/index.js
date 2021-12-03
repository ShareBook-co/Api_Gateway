const { ApolloServer } = require('apollo-server');

const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')
const authentication = require('./utils/authentication')
const authAPI = require('./dataSources/authAPI')
const facturasAPI = require('./dataSources/facturasAPI')

const server = new ApolloServer({
    context: authentication,
    typeDefs,
    resolvers,
    dataSources: () => ({
        authAPI : new authAPI(),
        facturasAPI: new facturasAPI()
    }),
    introspection: true,
    playground: true
});

server.listen( process.env.PORT || 4000).then(({url}) => {
    console.log(`Server ready at ${url}`);
});