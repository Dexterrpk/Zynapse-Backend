const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  phone: String,
  content: String,
  response: String,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('message', messageSchema);
