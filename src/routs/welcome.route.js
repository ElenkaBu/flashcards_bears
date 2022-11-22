const express = require('express');

const route = express.Router();

const renderTemplate = require('../lib/renderTemplate');

const Welcome = require('../views/Welcome');

route.get('/', (req, res) => {
  renderTemplate(Welcome, {}, res);
});

module.exports = route;
