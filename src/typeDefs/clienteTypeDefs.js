const { gql } = require('apollo-server')

const facturasTypes = gql`
    input Cliente {
        username : String!
    }

    type ClienteDetail{
        username: String!
    }

    extend type Query {
        ClienteByUsername(username : String!) : ClienteDetail!
    }

    extend type Mutation {
        createCliente(cliente : Cliente!)  : ClienteDetail!
        updateCliente(cliente : Cliente!)  : ClienteDetail!
        deleteCliente(username : String!)  : String!
    }
`;

module.exports = facturasTypes;