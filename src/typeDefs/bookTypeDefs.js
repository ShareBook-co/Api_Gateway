const { gql } = require('apollo-server')

const bookTypes = gql`
    type Book {
        id        : Int!
        isbn      : Int!
        title     : String!
        language  : String!
        price     : Int!
        state     : String!
        editorial : String!
        author    : String!
        grade     : String!
    }

    input BookInput {
        isbn      : Int!
        title     : String!
        language  : String!
        price     : Int!
        state     : String!
        editorial : String!
        author    : String!
        grade     : String!
    }

    input BookUpdate {
        price     : Int!
        state     : String!
    }

    extend type Query {
        booksById(bookId : String!) : Book!
    }
    extend type Mutation {
        createBook(book : BookInput!) : Book!
        updateBook(book : BookUpdate!) : Book!
        deleteBook(bookId : String!) : String!
    }

`;

module.exports = bookTypes;