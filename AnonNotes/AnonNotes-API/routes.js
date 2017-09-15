const Router = require('express').Router;
const router = new Router();

const note = require('./model/note/router');

router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to anonnotes-api API!' });
});

router.use('/notes', note);

module.exports = router;
