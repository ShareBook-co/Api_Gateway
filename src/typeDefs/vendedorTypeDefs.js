const { gql } = require('apollo-server')

const facturasTypes = gql`
    type Vendedor {
        username : string!
    }

    extends type Query {
        VendedorByUsername(username : string!) : Vendedor!
    }

    extends type Mutation {
        createVendedor(vendedor : Vendedor!)  : Vendedor!
        updateVendedor(vendedor : Vendedor!)  : Vendedor!
        deleteVendedor(username : string!)  : String!
    }
`;

module.exports = facturasTypes;