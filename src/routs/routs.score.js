const express = require('express');

const route = express.Router();

const renderTemplate = require('../lib/renderTemplate');

const { User, Round, Deck } = require('../../db/models');

const Score = require('../views/Score');

route.get('/', (req, res) =>
  res.redirect('/')
)

route.get('/:id', async (req, res) => {
  const { id } = req.params;
  const user_id = id;
  console.log("id-------", id)
  console.log("user_id-------", user_id)
  try {
    const user = await User.findByPk(id, { raw: true });
    const round = await Round.findByPk(user_id, { raw: true });
    console.log("round-------", round);
    const allRounds = await Round.findAll({ raw: true });
    console.log("Allround-------", allRounds);
    renderTemplate(Score, { user, round, allRounds }, res);
  } catch (error) {
    res.json(error);
    console.log("error", error);
  }


});

module.exports = route;
