`use strict`;
const request = require('request-promise-native')

module.exports = class Poloniex {
  constructor (fromCurrency, toCurrency) {
    this.fromCurrency = fromCurrency;
    this.toCurrency = toCurrency;
  }
  getData() {
    return request({
      uri: `https://poloniex.com/public?command=returnOrderBook&currencyPair=${this.fromCurrency}_${this.toCurrency}&depth=1000`,
      json: true
    })
    .then( response => {
      if (response.error) {
        throw new Error('Request Failed to Poloniex');
      }
      return response;
    })
    .catch( error => {
      return {
        asks : [],
        bids : []
      };
    })
  }
  transform(data) {
    const baseObject = {
      exchange : 'Poloniex',
      buy : {},
      sell : {}
    };
    data.bids.forEach(buyOrder => {
      baseObject.buy[Number(buyOrder[0])] = buyOrder[1];
    });
    data.asks.forEach(sellOrder => {
      baseObject.sell[Number(sellOrder[0])] = sellOrder[1];
    });
    return baseObject;
  }
}