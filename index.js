`use strict`;

const express = require('express');
const app = express();
const orderBooks = require('./orderBooks');
const portNumber = 3000

app.get('/getOrderBooks', ({ query: { from, to }}, res) => {
  orderBooks(from, to)
    .then((totals) => res.send(totals))
    .catch( error => console.error('IT FAILED'))
})

app.listen(portNumber, () => console.log(`Web Server Started on port ${portNumber}`))