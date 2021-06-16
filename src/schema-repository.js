const { gql } = require('apollo-server');

const typeDefs = gql`
type Stock {
    isin: String!
    symbol: String!
    stockName: String
    marketRate: Float!
    currency: Currency!
}

enum Currency {
    CHF
    CNY
    EUR
    GBP
    USD
}

type Query{
    getAllStocks: [Stock]
}
`;

module.exports = typeDefs;