`use strict`;

const bittrex = require('./exchanges/bittrex');
const poloniex = require('./exchanges/poloniex');

const exchanges = [
  bittrex,
  poloniex
];

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

Promise.all(exchanges.map( exchange => {
  return exchange.getData()
    .then( response => {
      return exchange.transform(response);
    })
    .catch( error => console.log(error));
}))
  .then((responses) => {
    const totals = {
      buy: {},
      sell: {}
    };
    responses.forEach((response) => {
      populateTotalsFromResponse(totals, response)
    });
    console.log(JSON.stringify(totals));
  })
  .catch( error => console.log(error));