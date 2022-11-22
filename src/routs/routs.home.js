const express = require('express');

const route = express.Router();

const { User } = require('../../db/models');

const renderTemplate = require('../lib/renderTemplate');

const Home = require('../views/Home');

const Games = require('../views/Games');

route.post('/addForm', async (req, res) => {
  const { name, password } = req.body;
  try {
    const user = await User.create({ name, password });
    res.redirect(`/games/${user.id}`);
  } catch (error) {
    console.log('error ==>>', error);
    res.json(error);
  }
});

route.get('/', (req, res) => {
  renderTemplate(Home, {}, res);
});



module.exports = route;
