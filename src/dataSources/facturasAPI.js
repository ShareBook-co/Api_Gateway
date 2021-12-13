const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server')

class facturasAPI extends RESTDataSource {
    constructor(){
        super();
        this.baseURL = serverConfig.facturasAPIurl;
    }

    async createCliente(cliente){
        cliente = new Object(cliente);
        return await this.post('/clientes', cliente);
    }
    async updateCliente(cliente){
        cliente = new Object(cliente);
        return await this.put('/clientes/update', cliente);
    }
    async deleteCliente(username){ 
        return await this.delete(`/clientes/delete/${username}`);
    }
    async clienteByUsername(username) {
        return await this.get(`/clientes/${username}`)
    }
    async createVendedor(vendedor) {
        vendedor = new Object(vendedor);
        return await this.post('/vendedores', vendedor);
    }
    async updateVendedor(vendedor) {
        vendedor = new Object(vendedor);
        return await this.put('/vendedores/update', vendedor);
    }
    async deleteVendedor(username) { 
        return await this.delete(`/vendedores/delete/${username}`)
    }
    async vendedorByUsername(username) {
        return await this.get(`/vendedores/${username}`);
    }
    async createFactura(factura){
        factura = new Object(factura);
        return await this.post('/facturacion', factura);
    }
    async updateFactura(factura){
        factura = new Object(factura);
        return await this.put('/facturacion/update',factura);
    }
    async deleteFactura(facturaId){
        return await this.delete(`/facturacion/delete/${facturaId}`);
    }
    async facturasByCliente(username) {
        return await this.get(`/facturacion/clientes/${username}`);
    }
    async facturasByVendedor(username){
        return await this.get(`/facturacion/vendedor/${username}`);
    }

}
module.exports = facturasAPI;