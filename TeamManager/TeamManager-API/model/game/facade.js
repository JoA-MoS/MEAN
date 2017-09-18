const Facade = require('../../lib/facade');
const gameSchema = require('./schema');

class GameFacade extends Facade {
    // Get the related children
    findById(...args) {
        return this.Schema
            .findById(...args).populate('players')
            .exec();
    }

}

module.exports = new GameFacade(gameSchema);
