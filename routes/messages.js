const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// GET mensagens
router.get('/', async (req, res) => {
  const messages = await Message.find().sort({ timestamp: -1 });
  res.json(messages);
});

// POST nova mensagem (manual)
router.post('/', async (req, res) => {
  const newMsg = new Message(req.body);
  await newMsg.save();
  res.status(201).json(newMsg);
});

module.exports = router;
