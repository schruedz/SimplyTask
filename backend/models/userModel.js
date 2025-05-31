const db = require('../config/db');

const User = {
  create: async (username, email, password_hash, role = 'user') => {
    const [result] = await db.query(
      'INSERT INTO users (username, email, password_hash, role) VALUES (?, ?, ?, ?)',
      [username, email, password_hash, role]
    );
    return result.insertId;
  },

  findByEmail: async (email) => {
    const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    return rows[0];
  },

  getAll: async () => {
    const [rows] = await db.query('SELECT id, username, email, role FROM users');
    return rows;
  }
};

module.exports = User;
