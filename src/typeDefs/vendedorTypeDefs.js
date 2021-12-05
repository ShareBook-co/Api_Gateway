const { gql } = require('apollo-server')

const facturasTypes = gql`
    input Vendedor {
        username : String!
    }

    type VendedorDetail {
        username : String!
    }

    extend type Query {
        vendedorByUsername(username : String!) : VendedorDetail!
    }

    extend type Mutation {
        createVendedor(vendedor : Vendedor!)  : VendedorDetail!
        updateVendedor(vendedor : Vendedor!)  : VendedorDetail!
        deleteVendedor(username : String!)  : String!
    }
`;

module.exports = facturasTypes;