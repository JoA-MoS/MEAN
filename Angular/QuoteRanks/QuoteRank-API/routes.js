const Router = require('express').Router;
const router = new Router();

const quote = require('./model/quote/router');

router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to quoterank-api API!' });
});

router.use('/quotes', quote);

module.exports = router;
