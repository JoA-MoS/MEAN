// here we load the Quote model that we created on the server.js page
var mongoose = require('mongoose');
var Wolf = mongoose.model('Wolf');
module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render("index");
    });

    // List Routes
    app.get('/wolves', function (req, res) {
        Wolf.find({}, function (err, wolves) {
            res.render('wolves', { wolves: wolves });
        });
    });

    // Create Routes
    app.get('/wolves/new', function (req, res) {
        Wolf.find({}, function (err, wolves) {
            res.render('new_wolf', { wolves: wolves });
        });
    });

    app.post('/wolves', function (req, res) {
        var wolf = new Wolf({ name: req.body.name, weight: req.body.weight, color: req.body.color });
        wolf.save(function (err) {
            if (err) {
                console.log("something went wrong");
            } else {
                res.redirect('/wolves');
            }
        });
    });

    // Edit routes
    app.get('/wolves/:id/edit', function (req, res) {
        Wolf.find({}, function (err, wolves) {
            res.render('edit_wolf', { wolves: wolves });
        });
    });
    app.put('/wolves/:id', function (req, res) {
        var wolf = new Wolf({ name: req.body.name, weight: req.body.weight, color: req.body.color });
        wolf.save(function (err) {
            if (err) {
                console.log("something went wrong");
            } else {
                res.redirect('/wolves');
            }
        });
    });


    // Delete routes
    app.get('/wolves/:id/destroy', function (req, res) {
        Wolf.find({}, function (err, wolves) {
            res.render('edit_wolf', { wolves: wolves });
        });
    });
    app.delete('/wolves/:id', function (req, res) {
        var wolf = new Wolf({ name: req.body.name, weight: req.body.weight, color: req.body.color });
        wolf.save(function (err) {
            if (err) {
                console.log("something went wrong");
            } else {
                res.redirect('/wolves');
            }
        });
    });

}
