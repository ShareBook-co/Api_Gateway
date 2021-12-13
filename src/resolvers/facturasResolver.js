const facturasResolver = {
    Query: {
        facturasByCliente : async (_, {username}, {dataSources}) => {
            return await dataSources.facturasAPI.facturasByCliente(username);
        },
        facturasByVendedor: async (_, {username}, {dataSources}) => {
            return await dataSources.facturasAPI.facturasByVendedor(username);
        },
        
    },
    Mutation: {
        createFactura : async (_, {factura}, {dataSources}) => {
            return await dataSources.facturasAPI.createFactura(factura);
        },
        updateFactura: async (_, {factura}, {dataSources}) => {
           return await dataSources.facturasAPI.updateFactura(factura);
        },
        deleteFactura: async (_, {facturaId}, {dataSources}) => {
            return await dataSources.facturasAPI.deleteFactura(facturaId);
        }
    }
}

module.exports = facturasResolver