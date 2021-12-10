const booksResolver = {
    Query: {
        booksById : async (_, {bookId}, {dataSources}) => {
            return await dataSources.authAPI.getBook(bookId);
        },
    }, 
    Mutation: {
        createBook: async (_, {book}, {dataSources, userIdToken}) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username;
            isVendedor = await dataSources.facturasAPI.vendedorByUsername(usernameToken);
            if(isVendedor != null) {
                return await dataSources.authAPI.createBook(book);
            } else{
                return null;
            }
        },
        updateBook: async (_, {book}, {dataSources, userIdToken}) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username;
            isVendedor = await dataSources.facturasAPI.vendedorByUsername(usernameToken);
            if(isVendedor != null) {
                return await dataSources.authAPI.updateBook(book);
            } else{
                return null;
            }
        },
        deleteBook: async (_, {bookId}, {dataSources, userIdToken}) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username;
            isVendedor = await dataSources.facturasAPI.vendedorByUsername(usernameToken);
            if(isVendedor != null) {
                return await dataSources.authAPI.deleteBook(bookId);
            } else{
                return null;
            }
        },
    }
}
module.exports = booksResolver;