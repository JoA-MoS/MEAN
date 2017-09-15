const Controller = require('../../lib/controller');
const noteFacade = require('./facade');

class NoteController extends Controller {

    create(req, res, next) {
        this.facade.create(req.body)
            .then(doc => res.status(201).json(doc))
            .catch(err => {
                res.status(400).json({ message: err.message, type: "error" })
            });

    }

}

module.exports = new NoteController(noteFacade);
