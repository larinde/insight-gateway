const { gql, ApolloServer } = require("apollo-server");
const { buildFederatedSchema } = require("@apollo/federation");
const fetch = require("node-fetch");

const port = 4001;
const apiUrl = 'http://localhost:3000';


const typeDefs = gql`
  enum Currency {
    CHF
    CNY
    EUR
    GBP
    USD
  }

  type Stock @key(fields: "symbol") {
    symbol: String!
    isin: String!
    wkn: String
    stockName: String
    marketRate: Float!
    currency: Currency!
  }

  extend type Query {
    stock(symbol: String!): Stock
    stocks: [Stock]
  }
`;




const resolvers = {
    Stock: {
       __resolveReference(ref){
           return(`${apiUrl}/stocks/${ref.symbol}`).then(res => res.json());
       }
    },
    Query: {
        stock(_, { symbol }){
            return(`${apiUrl}/stocks/${symbol}`).then(res => res.json());
        },
        stock(){
            return(`${apiUrl}/stocks`).then(res => res.json());
        },
    }
};

const server = new ApolloServer({
    schema: buildFederatedSchema([{ typeDefs, resolvers }])
});

server.listen({ port }).then(({ url }) => {
    console.log(`Stocks Endpoint available at: ${url}`);
});