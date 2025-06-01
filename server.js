const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./backend/routes/userRoutes'); // correto com base no seu path

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Rotas
app.get('/', (req, res) => res.send('Zynapse API rodando'));
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
