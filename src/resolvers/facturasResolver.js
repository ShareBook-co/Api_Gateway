const facturasResolver = {
    Query: {
        facturasByCliente : async (_, {username}, {dataSources, userIdToken}) => {
            
            return await dataSources.facturasAPI.FacturasByCliente(username);
        },
        facturasByVendedor: async (_, {username}, {dataSources}) => {
            return await dataSources.facturasAPI.FacturasByVendedor(username);
        },
        
    },
    Mutation: {
        createFactura : async (_, {factura}, {dataSources, userIdToken}) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username;
            isVendedor = await dataSources.facturasAPI.vendedorByUsername(usernameToken);
            if(isVendedor != null) {
                return await dataSources.facturasAPI.createFactura(factura);
            } else{
                return null;
            }
        },
        updateFactura: async (_, {factura}, {dataSources, userIdToken}) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username;
            isVendedor = await dataSources.facturasAPI.vendedorByUsername(usernameToken);
            if(isVendedor != null) {
                return await dataSources.facturasAPI.updateFactura(factura);
            } else{
                return null;
            }
        },
        deleteFactura: async (_, {facturaId}, {dataSources, userIdToken}) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username;
            isVendedor = await dataSources.facturasAPI.vendedorByUsername(usernameToken);
            if(isVendedor != null) {
                return await dataSources.facturasAPI.deleteFactura(facturaId);
            } else{
                return null;
            }
        }
    }
}

module.exports = facturasResolver