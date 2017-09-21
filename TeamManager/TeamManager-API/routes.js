const Router = require('express').Router;
const router = new Router();

const player = require('./model/player/router');

router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to teammanager-api API!' });
});

router.use('/players', player);

module.exports = router;
