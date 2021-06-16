const {ApolloServer} = require('apollo-server')

const typeDefs = require('./schema-repository')

const server = new ApolloServer({
    typeDefs, 
    mocks: true
});

server.listen().then(() => {
    console.log(`
      starting server
    `);
});