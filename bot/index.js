const Message = require('../models/message');

await Message.create({
  phone: sender,
  content: message,
  response: reply
});
