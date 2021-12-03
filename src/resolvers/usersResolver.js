const userResolver = {
    Query: {
        ClienteByUsername: async (_, {username}, {dataSources, userIdToken})=> {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username;
            isVendedor = await dataSources.facturasAPI.vendedorByUsername(usernameToken);
            if(isVendedor != null) {
                return await dataSources.facturasAPI.clienteByUsername(username);
            } else{
                return null;
            }
            
        }, 
        VendedorByUsername: async (_, {username}, {dataSources, userIdToken}) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username;
            isVendedor = await dataSources.facturasAPI.vendedorByUsername(usernameToken);
            if(isVendedor != null) {
                return await dataSources.facturasAPI.vendedorByUsername(username);
            } else{
                return null;
            }
            
        }
    },
    Mutation: {
        createCliente: async (_, {username}, {dataSources, userIdToken}) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username;
            isVendedor = await dataSources.facturasAPI.vendedorByUsername(usernameToken);
            if(isVendedor != null) {
                return await dataSources.facturasAPI.createCliente(username);
            } else{
                return null;
            }
        },
        updateCliente: async (_, {username}, {dataSources, userIdToken}) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username;
            isVendedor = await dataSources.facturasAPI.vendedorByUsername(usernameToken);
            if(isVendedor != null || username == userIdToken) {
                return await dataSources.facturasAPI.updateCliente(username);
            } else{
                return null;
            }
        },
        deleteCliente: async (_, {username}, {dataSources, userIdToken}) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username;
            isVendedor = await dataSources.facturasAPI.vendedorByUsername(usernameToken);
            if(isVendedor != null) {
                return await dataSources.facturasAPI.deleteCliente(username);
            } else{
                return null;
            }
        },
        createVendedor: async (_, {username}, {dataSources, userIdToken}) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username;
            isVendedor = await dataSources.facturasAPI.vendedorByUsername(usernameToken);
            if(isVendedor != null) {
                return await dataSources.facturasAPI.createVendedor(username);
            } else{
                return null;
            }  
        },
        updateVendedor: async (_, {username}, {dataSources, userIdToken}) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username;
            isVendedor = await dataSources.facturasAPI.vendedorByUsername(usernameToken);
            if(isVendedor != null) {
                return await dataSources.facturasAPI.updateVendedor(username);
            } else{
                return null;
            }  
        },
        deleteVendedor: async (_, {username}, {dataSources, userIdToken}) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username;
            isVendedor = await dataSources.facturasAPI.vendedorByUsername(usernameToken);
            if(isVendedor != null) {
                return await dataSources.facturasAPI.deleteVendedor(username);
            } else{
                return null;
            }  
        }
    }
}

module.exports = userResolver;