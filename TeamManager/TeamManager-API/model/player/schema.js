const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const playerSchema = new Schema({
  name: { type: String, required: true },
  prefferedPosition: { type: String, required: true },
  games: [{ type: Schema.Types.ObjectId, ref: 'Game' }]
});


module.exports = mongoose.model('Player', playerSchema);
