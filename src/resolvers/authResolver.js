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
            const accountInput = {

            }

            const authInput = {
                
            }
        },
        logIn: async (_, {}, {}) => {

        },
        refreshToken: async (_, {}, {}) => {

        },
        updateUser: async (_, {}, {}) => {

        },
        deleteUser: async (_, {}, {}) => {

        }
    }
}

module.exports = userResolver