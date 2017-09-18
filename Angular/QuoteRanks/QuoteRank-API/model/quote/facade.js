const Facade = require('../../lib/facade');
const quoteSchema = require('./schema');

class QuoteFacade extends Facade {}

module.exports = new QuoteFacade(quoteSchema);
