const db = require('../config/db');

const Task = {
  create: async (title, description, priority, status, userId) => {
    const [result] = await db.query(
      'INSERT INTO tasks (title, description, priority, status, user_id) VALUES (?, ?, ?, ?, ?)',
      [title, description, priority, status, userId]
    );
    return result.insertId;
  },

  getAll: async () => {
    const [rows] = await db.query('SELECT * FROM tasks');
    return rows;
  },

  getByUserId: async (userId) => {
    const [rows] = await db.query('SELECT * FROM tasks WHERE user_id = ?', [userId]);
    return rows;
  }
};

module.exports = Task;
