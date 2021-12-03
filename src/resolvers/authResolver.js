const userResolver = {
    Query: {
        userDetailById: async (_, { userId}, { dataSources, userIdToken }) => {
            if(userId == userIdToken)
                return await dataSources.authAPI.getUser(userId);
            else
                return null;
        }
    },
    Mutation: {
        signUpUser: async (_, { userInput}, {dataSources}) => {
            const authInput = {
                username : userInput.username,
                password : userInput.password,
                name : userInput.name,
                email : userInput.email,
                address : userInput.address,
                phone : userInput.phone,
                gender : userInput.gender
            }
            return await dataSources.authAPI.createUser(authInput);
        },
        logIn: async (_, { credentials }, { dataSources }) => {
            return await dataSources.authAPI.authRequest(credentials);
        },
        refreshToken: async (_, { refresh }, { dataSources }) => {
            return await dataSources.authAPI.refreshToken(refresh);
        },
        updateUser: async (_, { userInput}, {dataSources, userIdToken}) => {
            if ( userInput.id == userIdToken ) {
                return await dataSources.authAPI.updateUser(userIdToken);
            }else{
                return null;
            }
        },
        deleteUser: async (_, { userId}, {dataSources, userIdToken}) => {
            if ( userInput.id == userIdToken ) {
                return await dataSources.authAPI.deleteUser(userId);
            }else{
                return null;
            }
        }
    }
}

module.exports = userResolver