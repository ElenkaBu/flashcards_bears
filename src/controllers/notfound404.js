const render = require('../lib/renderTemplate');
const NotFound = require('../views/NotFound');

module.exports = (req, res) => {
  res.status(404)
  render(NotFound, {username: req.session?.user?.name}, res)
};
