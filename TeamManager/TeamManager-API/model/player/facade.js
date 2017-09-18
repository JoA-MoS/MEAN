const Facade = require('../../lib/facade');
const playerSchema = require('./schema');

class PlayerFacade extends Facade {}

module.exports = new PlayerFacade(playerSchema);
