const Task = require('../models/taskModel');

const taskController = {
  create: async (req, res) => {
    const { title, description, priority, status } = req.body;
    const userId = req.user.id;

    try {
      const taskId = await Task.create(title, description, priority, status, userId);
      res.status(201).json({ message: 'Tarea creada con éxito', taskId });
    } catch (err) {
      console.error('Error al crear tarea:', err);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  },

  getAll: async (req, res) => {
    try {
      const tasks = await Task.getAll();
      res.json(tasks);
    } catch (err) {
      console.error('Error al obtener tareas:', err);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  },

  getByUser: async (req, res) => {
    const userId = req.user.id;

    try {
      const tasks = await Task.getByUserId(userId);
      res.json(tasks);
    } catch (err) {
      console.error('Error al obtener tareas del usuario:', err);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  },
};

module.exports = taskController;
