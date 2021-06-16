const {ApolloServer} = require('apollo-server')

const typeDefs = require('./schema-repository')

const mocks = require('./mock-data/stock-data')

const server = new ApolloServer({
    typeDefs, 
    mocks
});

server.listen().then(() => {
    console.log(`
      starting server
    `);
});