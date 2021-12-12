const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');
class AuthAPI extends RESTDataSource {
    constructor(){
        super();
        this.baseURL = serverConfig.authBackendUrl;
    }
    async createUser(user){
        user = new Object( JSON.parse( JSON.stringify(user) ) );
        return await this.post('/user/', user);
    }
    async getUser(userId){
        return await this.get(`/user/${userId}/`)
    }
    async updateUser(user){
        user = new Object( JSON.parse( JSON.stringify(user) ) );
        let userId = user.id;
        return await this.put(`/user/update/${userId}`, user);
    }
    async deleteUser(userId){
        return await this.delete(`/user/remove/${userId}/`);
    }
    async authRequest(credential){
        credential = new Object(credential);
        return await this.post('/login/', credential);
    }
    async refreshToken(token){
        token = new Object( token ) ;
        return await this.post('/refresh/', token);
    }
    async createBook(book){
        book = new Object( JSON.parse ( JSON.stringify(book) ) );
        return await this.post('/book/', book);
    }
    async getBook(bookId){
        return await this.get(`/book/${bookId}/`);
    }
    async updateBook(book){
        book = new Object( JSON.parse ( JSON.stringify(book) ) );
        let bookId = book.id;
        return await this.put(`/book/update/${bookId}/`);
    }
    async deleteBook(bookId){
        return await this.delete(`/book/remove/${bookId}/`);
    }
}

module.exports = AuthAPI;