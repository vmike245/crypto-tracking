`use strict`;
const bittrex = require('./exchanges/bittrex');
const poloniex = require('./exchanges/poloniex');
// const totals = {
//   buy: {
//     [rate]: {
//       quantity: Number;
//       supportedExchanges: String[];
//     }
//   },
//   sell: {
//     [rate]: {
//       quantity: Number;
//       supportedExchanges: String[];
//     }
//   }
// }

const setQuantityForRates = ({ totals, transactionType, rates, transactionMap, exchangeName }) => {
  rates.forEach( buyRate => {
    const currentBuyRate = totals.buy[buyRate];
    const quantityForBuyRate = currentBuyRate ? currentBuyRate.quantity : 0;
    const supportedExchanges = currentBuyRate ? currentBuyRate.supportedExchanges : [];
    totals[transactionType][buyRate] = {
      quantity: quantityForBuyRate + transactionMap[buyRate],
      supportedExchanges : supportedExchanges.concat(exchangeName),
    }
  })
}

const populateTotalsFromResponse = (totals, { buy, sell, exchange }) => {
  const buyRates = Object.keys(buy);
  const sellRates = Object.keys(sell);
  setQuantityForRates({
    totals,
    transactionType: 'buy',
    rates: buyRates,
    transactionMap: buy,
    exchangeName: exchange
  });
  setQuantityForRates({
    totals,
    transactionType: 'sell',
    rates: sellRates,
    transactionMap: sell,
    exchangeName: exchange
  });

}

const getOrderBook = (fromCurrency, toCurrency) => {
  
  const exchanges = [
    bittrex,
    poloniex
  ];
  return Promise.all(exchanges.map( exchange => exchange.getOrderBook(fromCurrency, toCurrency)))
    .then((responses) => {
      const unsortedTotals = {
        buy: {},
        sell: {}
      };
      const totals = {
        buy: {},
        sell: {}
      };
      responses.forEach((response) => {
        populateTotalsFromResponse(unsortedTotals, response);
      });
      const buyRates = Object.keys(unsortedTotals.buy);
      const sellRates = Object.keys(unsortedTotals.sell);
      buyRates.sort();
      buyRates.forEach( buyRate => totals.buy[buyRate] = unsortedTotals.buy[buyRate])
  
      sellRates.sort();
      sellRates.forEach( sellRate => totals.sell[sellRate] = unsortedTotals.sell[sellRate])
      return totals;
    })
    .catch( error => console.log(error));
}

module.exports = getOrderBook