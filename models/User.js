const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nome: String,
  telefone: String,
  tags: [String],
  historico: [String],
  criadoEm: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
