const express = require('express');

const route = express.Router();

const renderTemplate = require('../lib/renderTemplate');

const Games = require('../views/Games');
const Game = require('../views/Game');

route.get('/', (req, res) => {
  renderTemplate(Games, {}, res);
});

route.get('/game', (req, res) => {
    renderTemplate(Game, {}, res);
  });


module.exports = route;
