const Controller = require('../../lib/controller');
const playerFacade = require('./facade');

class PlayerController extends Controller {}

module.exports = new PlayerController(playerFacade);
