const express = require('express');

const route = express.Router();

const renderTemplate = require('../lib/renderTemplate');

const { Deck } = require('../../db/models');

const Games = require('../views/Games');
const Game = require('../views/Game');

route.get('/', async (req, res) => {
  try {
    const decks = await Deck.findAll();
    renderTemplate(Games, { decks }, res);
  } catch (error) {
    res.json(error);
    console.log('error', error);
  }
});

route.get('/game', (req, res) => {
    renderTemplate(Game, {}, res);
  });

module.exports = route;
