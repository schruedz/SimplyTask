const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./config/db');
const pool = require('./config/db');
const mysql = require('mysql2/promise');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/users', userRoutes);

async function verificarConexion() {
  try {
    const connection = await pool.getConnection();
    console.log('La base de datos está conectada');
    connection.release();
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error.message);
  }
}

verificarConexion();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
