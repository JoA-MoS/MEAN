const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const playerSchema = new Schema({
  name: { type: String, required: true },
  preferredPosition: { type: String },
  gameStatuses: [],
});


module.exports = mongoose.model('Player', playerSchema);
