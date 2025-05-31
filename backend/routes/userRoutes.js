const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const isAdmin = require('../middlewares/roleMiddleware');
const { getUsers } = require('../controllers/userController');

router.get('/', auth, isAdmin('admin'), getUsers);

module.exports = router;
