`use strict`;
const request = require('request-promise-native')

module.exports = {
  getOrderBook: (fromCurrency, toCurrency) => {
    return request({
      uri: `https://poloniex.com/public?command=returnOrderBook&currencyPair=${fromCurrency}_${toCurrency}&depth=100`,
      json: true
    })
    .then( response => {
      if (response.error) {
        throw new Error('Request Failed to Poloniex');
      }
      const baseObject = {
        exchange : 'Poloniex',
        buy : {},
        sell : {}
      };
      response.bids.forEach(buyOrder => {
        baseObject.buy[Number(buyOrder[0])] = buyOrder[1];
      });
      response.asks.forEach(sellOrder => {
        baseObject.sell[Number(sellOrder[0])] = sellOrder[1];
      });
      return baseObject;
    })
    .catch( error => {
      return {
        asks : [],
        bids : []
      };
    })
  }
}