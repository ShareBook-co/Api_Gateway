const { gql } = require('apollo-server')

const facturasTypes = gql`
    type Vendedor {
        username : string!
    }

    extend type Query {
        VendedorByUsername(username : string!) : Vendedor!
    }

    extend type Mutation {
        createVendedor(vendedor : Vendedor!)  : Vendedor!
        updateVendedor(vendedor : Vendedor!)  : Vendedor!
        deleteVendedor(username : string!)  : String!
    }
`;

module.exports = facturasTypes;