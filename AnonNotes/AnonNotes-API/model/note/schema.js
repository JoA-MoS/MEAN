const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const noteSchema = new Schema({
  noteText: { type: String, required: true, minlength: 3 },
}, { timestamps: {} });


module.exports = mongoose.model('Note', noteSchema);
