`use strict`;

module.exports = {
  getData : () => new Promise((resolve, reject) => resolve(require('../mockData/poloniex'))),
  transform : (data) => {
    const baseObject = {
      exchange : 'Poloniex',
      buy : {},
      sell : {}
    };
    data.asks.forEach(buyOrder => {
      baseObject.buy[Number(buyOrder[0])] = buyOrder[1];
    });
    data.bids.forEach(sellOrder => {
      baseObject.sell[Number(sellOrder[0])] = sellOrder[1];
    });
    return baseObject;
  }
}