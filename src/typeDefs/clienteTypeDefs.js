const { gql } = require('apollo-server')

const facturasTypes = gql`
    type Cliente {
        username : string!
    }

    extend type Query {
        ClienteByUsername(username : string!) : Cliente!
    }

    extend type Mutation {
        createCliente(cliente : Cliente!)  : Cliente!
        updateCliente(cliente : Cliente!)  : Cliente!
        deleteCliente(username : string!)  : String!
    }
`;

module.exports = facturasTypes;