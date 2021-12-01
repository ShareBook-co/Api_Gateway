const { gql } = require('apollo-server')

const facturasTypes = gql`
    type Cliente {
        username : string!
    }

    extends type Query {
        ClienteByUsername(username : string!) : Cliente!
    }

    extends type Mutation {
        createCliente(cliente : Cliente!)  : Cliente!
        updateCliente(cliente : Cliente!)  : Cliente!
        deleteCliente(username : string!)  : String!
    }
`;

module.exports = facturasTypes;