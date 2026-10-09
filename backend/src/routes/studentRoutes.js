const express = require('express');
const router = express.Router();
const { addStudent } = require('../controllers/studentController');

// POST /api/students - Add a new student
router.post('/', addStudent);

module.exports = router;
