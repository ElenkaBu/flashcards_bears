const express = require('express');

const route = express.Router();

const renderTemplate = require('../lib/renderTemplate');

const { Deck } = require('../../db/models');
const { User } = require('../../db/models');

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

route.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findOne({ where: { id } });
    const decks = await Deck.findAll();
    renderTemplate(Games, { decks: decks, name: user.name }, res);
    console.log(decks)
  } catch (error) {
    res.json(error);
    console.log('error', error);
  }
  
});

module.exports = route;
