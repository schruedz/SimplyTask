const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const authMiddleware = require('../middlewares/authMiddleware');


router.post('/create', authMiddleware, taskController.create);   
router.get('/', authMiddleware, taskController.getAll);         
router.get('/my-tasks', authMiddleware, taskController.getByUser); 

module.exports = router;
