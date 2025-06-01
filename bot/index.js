const Message = require('../models/Message');

await Message.create({
  phone: sender,
  content: message,
  response: reply
});
