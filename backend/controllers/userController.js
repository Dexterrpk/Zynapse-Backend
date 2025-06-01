const User = require('../models/user');

// Criar novo usuário
exports.createUser = async (req, res) => {
  try {
    const novo = await User.create(req.body);
    res.status(201).json(novo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Buscar todos
exports.getAllUsers = async (req, res) => {
  try {
    const lista = await User.find();
    res.json(lista);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
