const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
require('dotenv').config();

const authController = {
  register: async (req, res) => {
    const { username, email, password, role } = req.body;

    try {
      const existingUser = await User.findByEmail(email);
      if (existingUser) {
        return res.status(400).json({ message: 'El correo ya está registrado.' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const userId = await User.create(username, email, hashedPassword, role);
      res.status(201).json({ message: 'Usuario registrado con éxito', userId });
    } catch (err) {
      console.error('Error al registrar usuario:', err);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  },

  login: async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await User.findByEmail(email);
      if (!user) {
        return res.status(401).json({ message: 'Credenciales inválidas' });
      }

      const valid = await bcrypt.compare(password, user.password_hash);
      if (!valid) {
        return res.status(401).json({ message: 'Credenciales inválidas' });
      }

      const token = jwt.sign(
        { id: user.id, email: user.email, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );

      res.json({ token, user: { id: user.id, email: user.email, role: user.role } });
    } catch (err) {
      console.error('Error al iniciar sesión:', err);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  },

  getUsers: async (req, res) => {
    try {
      if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Acceso denegado' });
      }

      const users = await User.getAll();
      res.json(users);
    } catch (err) {
      console.error('Error al obtener usuarios:', err);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  },
};

module.exports = authController;
