const express = require('express');

const route = express.Router();

const renderTemplate = require('../lib/renderTemplate');

const Score = require('../views/Score');

route.get('/', (req, res) => {
  renderTemplate(Score, {}, res);
});

module.exports = route;
