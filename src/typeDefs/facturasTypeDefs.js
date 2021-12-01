const { gql } = require('apollo-server')

const facturasTypes = gql`

    type Facturas {
        id              : String!
        vendedor        : String!
        cliente         : String!
        direccion       : String!
        idBook          : String!
        cantidadLibro   : Int!
        valorTotal      : Int!
        fecha           : String!
    }

    input FacturasInput {
        vendedor        : String!
        cliente         : String!
        direccion       : String!
        idBook          : String!
        cantidadLibro   : Int!
    }

    input FacturasUpdate {
        id            : String!
        direccion     : String!
        idBook        : String!
        cantidadLibro : String!
    }

    extend type Query {
        facturasByCliente(username : String!)  : Facturas!
        facturasByVendedor(username : string!) : Facturas!
    }
    extend type Mutation {
        createFactura(factura : FacturasInput)  : Facturas!
        updateFactura(factura : FacturasUpdate) : Facturas!
        deleteFactura(facturaId : String!)      : String!
    }
`;

module.exports = facturasTypes;