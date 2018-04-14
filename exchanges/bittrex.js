`use strict`;
const request = require('request-promise-native');

// const baseObject = {
//   exchange: String;
//   buy: {
//     [rate] : Number
//   };
//   sell: {
//     [rate] : Number
//   };
// }


module.exports = class Bittrex {
  constructor(fromCurrency, toCurrency) {
    this.fromCurrency = fromCurrency;
    this.toCurrency = toCurrency;
  }
  getData() {
    return request({
      uri: `https://bittrex.com/api/v1.1/public/getorderbook?market=${this.fromCurrency}-${this.toCurrency}&type=both`,
      json: true
    })
    .then( response => {
      if (!response.success) {
        throw new Error('Request Failed to Bittrex');
      }
      return response;
    })
    .catch( error => {
      return {
        result : {
          buy: [],
          sell: []
        }
      };
    })
  }
  transform(data) {
    const baseObject = {
      exchange : 'Bittrex',
      buy : {},
      sell : {}
    };
    data.result.buy.forEach(({ Rate, Quantity}) => {
      baseObject.buy[Rate] = Quantity;
    });
    data.result.sell.forEach(({ Rate, Quantity }) => {
      baseObject.sell[Rate] = Quantity;
    });
    return baseObject;
  }
}