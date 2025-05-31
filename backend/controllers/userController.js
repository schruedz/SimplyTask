const pool = require('../models/userModel');

exports.getUsers = async (req, res) => {
  try {
    const [users] = await pool.query('SELECT id, username, email, role FROM users');
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
