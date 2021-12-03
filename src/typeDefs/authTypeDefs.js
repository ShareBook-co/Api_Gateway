const { gql } = require('apollo-server')

const authTypes = gql `
    input SignUpInput {
        username : string!
        password : string!
        name     : string!
        email    : string!
        address  : string!
        phone    : Int!
        gender   : string!
    }

    type Tokens {
        refresh : String!
        acces   : String!
    }

    input Credentials {
        username : string!
        password : string!
    }

    type Access {
        access : String!
    }

    type UserDetail {
        id       : String!
        username : String!
        email    : String!
        name     : String!
        address  : string!
        phone    : Int!
        gender   : string!
    }

    type UserUpdate {
        id       : Int!
        name     : String!
        password : String!
        address  : string!
        phone    : Int!
    }

    type Query {
        userDetailById(userId: Int!) : UserDetail! 
    }

    type Mutation {
        signUpUser(userInput : SignUpInput!) : Tokens!
        logIn(credentials : Credentials!)    : Tokens!
        refreshToken (refresh : String!)     : Access!
        updateUser (userInput : UserUpdate!) : UserDetail!
        deleteUser (userId : Int!)           : String!
    }
`;

module.exports = authTypes;