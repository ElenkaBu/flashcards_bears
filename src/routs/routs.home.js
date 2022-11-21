const express = require('express');

const route = express.Router();

const { User } = require('../../db/models');

const renderTemplate = require('../lib/renderTemplate');

const Home = require('../views/Home');

route.post('/addForm', async (req, res) => {
  const { name, password } = req.body;
  console.log({ name, password });
  try {
    await User.create({ name, password });
    res.redirect('/games');
  } catch (error) {
    console.log('error ==>>', error);
    res.json(error);
  }
});

route.get('/', (req, res) => {
  renderTemplate(Home, {}, res);
});

module.exports = route;
