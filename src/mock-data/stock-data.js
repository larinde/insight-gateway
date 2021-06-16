const mockStockData = {
    Stock: () => ({
      isin: () => "KYG8354H1267",
      wkn: () => "A2QPQZ",
      marketRate: () =>  9.37,
      currency: () =>  "USD",
      stockName: () =>  "Soaring Eagle Acquisition Corp",
      symbol: () =>  "SRNG"
     })
  };

module.exports = mockStockData;  