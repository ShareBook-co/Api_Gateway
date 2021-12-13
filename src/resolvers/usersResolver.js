const userResolver = {
    Query: {
        ClienteByUsername: async (_, {username}, {dataSources})=> {
            return await dataSources.facturasAPI.clienteByUsername(username);
        }, 
        vendedorByUsername: async (_, {username}, {dataSources}) => {
            return await dataSources.facturasAPI.vendedorByUsername(username);
        }
    },
    Mutation: {
        createCliente: async (_, {username}, {dataSources}) => {
           return await dataSources.facturasAPI.createCliente(username);
        },
        updateCliente: async (_, {username}, {dataSources}) => {
            return await dataSources.facturasAPI.updateCliente(username);
        },
        deleteCliente: async (_, {username}, {dataSources}) => {
            return await dataSources.facturasAPI.deleteCliente(username);
        },
        createVendedor: async (_, {username}, {dataSources}) => {
            return await dataSources.facturasAPI.createVendedor(username);
        },
        updateVendedor: async (_, {username}, {dataSources}) => {
            return await dataSources.facturasAPI.updateVendedor(username);  
        },
        deleteVendedor: async (_, {username}, {dataSources}) => {
            return await dataSources.facturasAPI.deleteVendedor(username);
        }
    }
}

module.exports = userResolver;