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


module.exports = {
  getOrderBook: (fromCurrency, toCurrency) => {
    return request({
      uri: `https://bittrex.com/api/v1.1/public/getorderbook?market=${fromCurrency}-${toCurrency}&type=both`,
      json: true
    })
    .then( response => {
      if (!response.success) {
        throw new Error('Request Failed to Bittrex');
      }
      const baseObject = {
        exchange : 'Bittrex',
        buy : {},
        sell : {}
      };
      response.result.buy.forEach(({ Rate, Quantity}) => {
        baseObject.buy[Rate] = Quantity;
      });
      response.result.sell.forEach(({ Rate, Quantity }) => {
        baseObject.sell[Rate] = Quantity;
      });
      return baseObject;
    })
    .catch( error => {
      return {
        exchange : 'Bittrex',
        buy : {},
        sell : {}
      };
    })
  }
}