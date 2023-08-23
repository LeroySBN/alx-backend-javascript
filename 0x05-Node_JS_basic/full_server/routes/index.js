const express = require('express');
const AppController = require('../controllers/AppControllers');
const StudentsController = require('../controllers/StudentsController');
// const readDatabase = require('../utils');

const router = express.Router();

router.get('/', AppController.getHomepage);

router.get('/students', StudentsController.getAllStudents);

router.get('/students/:major', StudentsController.getAllStudentsByMajor);

module.exports = router;
