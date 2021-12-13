const { gql } = require('apollo-server')

const authTypes = gql `
    input SignUpInput {
        username : String!
        password : String!
        name     : String!
        email    : String!
        address  : String!
        phone    : Int!
        gender   : Boolean!
    }

    type Tokens {
        refresh : String!
        access   : String!
    }

    input Refresh{
        refresh : String!
    }

    input Credentials {
        username : String!
        password : String!
    }

    type Access {
        access : String!
    }

    type UserDetail {
        id       : String!
        username : String!
        email    : String!
        name     : String!
        address  : String!
        phone    : Int!
        gender   : String!
    }

    input UserUpdate {
        id       : Int!
        name     : String!
        password : String!
        address  : String!
        phone    : Int!
    }

    type Query {
        userDetailById(userId: Int!) : UserDetail! 
    }

    type Mutation {
        signUpUser(userInput : SignUpInput!) : Tokens!
        logIn(credentials : Credentials!)    : Tokens!
        refreshToken (refresh : Refresh!)     : Access!
        updateUser (userInput : UserUpdate!) : UserDetail!
        deleteUser (userId : Int!)           : String!
    }
`;

module.exports = authTypes;