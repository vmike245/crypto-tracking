`use strict`;

const express = require('express');
const app = express();
const orderBooks = require('./orderBooks');

app.get('/getOrderBooks', ({ query: { from, to }}, res) => {
  orderBooks(from, to)
    .then((totals) => res.send(totals))
    .catch( error => console.error('IT FAILED'))
})

app.listen(3000, () => console.log('Web Server Started on port 3000'))