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
  if (buyRates.length) {
    setQuantityForRates({
      totals,
      transactionType: 'buy',
      rates: buyRates,
      transactionMap: buy,
      exchangeName: exchange
    });
  }
  const sellRates = Object.keys(sell);
  if (sellRates.length) {
    setQuantityForRates({
      totals,
      transactionType: 'sell',
      rates: sellRates,
      transactionMap: sell,
      exchangeName: exchange
    });
  }

}

const sortRates = (rates) => {
  const ratesArray = Object.keys(rates);
  if (ratesArray.length === 0) {
    return {}
  } 
  ratesArray.sort();
  const sortedRates = {};
  ratesArray.forEach( rate => sortedRates[rate] = rates[rate])
  return sortedRates;
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
      responses.forEach((response) => {
        console.log(response);
        populateTotalsFromResponse(unsortedTotals, response);
      });

      return {
        buy: sortRates(unsortedTotals.buy),
        sell: sortRates(unsortedTotals.sell)
      };
    })
    .catch( error => console.log(error));
}

module.exports = getOrderBook