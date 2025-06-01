const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);

// Conectar ao MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('🟢 MongoDB conectado com sucesso!');
  app.listen(process.env.PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${process.env.PORT}`);
  });
})
.catch((err) => console.error('Erro ao conectar ao MongoDB:', err));
