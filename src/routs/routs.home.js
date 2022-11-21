const express = require('express');

const route = express.Router();

const renderTemplate = require('../lib/renderTemplate');

const Home = require('../views/Home');

route.get('/', (req, res) => {
  renderTemplate(Home, {}, res);
});

module.exports = route;
