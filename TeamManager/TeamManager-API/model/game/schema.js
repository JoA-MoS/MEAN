const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const Player = require('../player/schema');


const gameSchema = new Schema({
  name: { type: String, required: true },
  players: [{ type: Schema.Types.ObjectId, ref: 'Player' }]
});


module.exports = mongoose.model('Game', gameSchema);


