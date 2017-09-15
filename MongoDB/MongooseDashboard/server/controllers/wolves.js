var mongoose = require('mongoose');
var Wolf = mongoose.model('Wolf');
module.exports = {
    show: function (req, res) {
        Wolf.find({}, function (err, wolves) {
            res.render('wolves', { wolves: wolves });
        })
    },
    create: function (req, res) {
        var quote = new Wolf({ name: req.body.name, quote: req.body.quote });
        quote.save(function (err) {
            if (err) {
                console.log("something went wrong");
            } else {
                res.redirect('/main');
            }
        })
    }
}
