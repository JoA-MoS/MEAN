var mongoose = require('mongoose');

var WolfSchema = new mongoose.Schema({
    name: String,
    weight: Number,
    color: String
});

var Wolf = mongoose.model('Wolf', WolfSchema);




