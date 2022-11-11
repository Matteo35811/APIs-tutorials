const express = require('express'); //import express

// 1.
const router = express.Router();
// 2.
const UserController = require('../controllers/User');
// 3.
router.post('/User', UserController.newUser);

router.get('/User', UserController.getAllUser);

router.delete('/User', teaController.deleteAllUser);

router.get('/User/:name', teaController.getOneUser);

router.delete('/User/:name', teaController.deleteOneUser);

// 4.
module.exports = router; // export to use in server.js
