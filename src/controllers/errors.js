const render = require('../lib/renderTemplate');
const Error = require('../views/Error');
const createError = require('http-errors');


// catch 404 and forward to error handler
const notFoundPage= (req, res, next) => {
  //some logic
  console.log('Page not found 404');
  next(createError(404));
};

// этот мидделвар сработает, если вызвать next() с аргументами, напр. next('error message')
// critical error handler
const criticalErr =  (err, req, res, next) => {
  // set locals, only providing error in development
  console.log('Error:', err.message);
  const message = err.message;
  const error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  render(Error, { error, message }, res);
};

module.exports = {criticalErr, notFoundPage}