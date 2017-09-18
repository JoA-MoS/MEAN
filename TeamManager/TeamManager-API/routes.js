const Router = require('express').Router;
const router = new Router();

const game = require('./model/game/router');
const player = require('./model/player/router');

router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to teammanager-api API!' });
});

router.use('/games', game);
router.use('/players', player);

module.exports = router;
