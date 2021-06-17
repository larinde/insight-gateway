const { ApolloServer } = require('apollo-server');
const { ApolloGateway } = require('@apollo/gateway');

const port = 4000;



const mocks = require('./mock-data/stock-data');

const gateway = new ApolloGateway({
    serviceList: [
        {'name': '', url: 'http://localhost:4001'}
    ]
});

const server = new ApolloServer({
    gateway, 
    subscriptions: false
});

server.listen().then((url) => {
    console.log(`
      Gateway Available at: ${url}
    `);
});