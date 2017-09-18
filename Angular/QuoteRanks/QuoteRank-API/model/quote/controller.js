const Controller = require('../../lib/controller');
const quoteFacade = require('./facade');

class QuoteController extends Controller {}

module.exports = new QuoteController(quoteFacade);
