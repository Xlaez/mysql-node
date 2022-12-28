const express = require('express');
const usercontroller = require('../controllers/user.controller');

const userRoutes = express.Router();

userRoutes.post('/user', usercontroller.createUser);
userRoutes.get('/user', usercontroller.getUsers);
userRoutes.get('/user/:email', usercontroller.getUser);

module.exports = userRoutes;
