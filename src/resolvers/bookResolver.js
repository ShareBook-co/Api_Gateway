const booksResolver = {
    Query: {
        booksById : async (_, {bookId}, {dataSources}) => {
            return await dataSources.authAPI.getBook(bookId);
        },
    }, 
    Mutation: {
        createBook: async (_, {book}, {dataSources}) => {
            return await dataSources.authAPI.createBook(book);
        },
        updateBook: async (_, {book}, {dataSources}) => {
            return await dataSources.authAPI.updateBook(book);
        },
        deleteBook: async (_, {bookId}, {dataSources}) => {
            return await dataSources.authAPI.deleteBook(bookId);
        },
    }
}
module.exports = booksResolver;