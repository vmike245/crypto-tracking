`use strict`;

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
  getData : () => new Promise((resolve, reject) => resolve(require('../mockData/bittrex'))),
  transform : (data) => {
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