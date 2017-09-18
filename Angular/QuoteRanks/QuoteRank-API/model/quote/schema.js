const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const quoteSchema = new Schema({
  quoteText: { type: String, required: true },
  author: { type: String, required: true }
});


module.exports = mongoose.model('Quote', quoteSchema);
