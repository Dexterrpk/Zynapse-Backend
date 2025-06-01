require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const clientRoutes = require('./routes/clients');
const messageRoutes = require('./routes/messages');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/clients', clientRoutes);
app.use('/api/messages', messageRoutes);

// Conexão com MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ MongoDB conectado com sucesso.');
  app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
}).catch(err => {
  console.error('Erro ao conectar ao MongoDB:', err);
});
