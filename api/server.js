const express = require('express');

const carsRoute = require('../cars/carsRouter.js');

const server = express();

server.use(express.json());

server.use('/api/cars', carsRoute);

server.get('/', (req, res) => {
    res.send(`<h2>Trustworthy Used Cars!</h2>`)
  });

module.exports = server;
