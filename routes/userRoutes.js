const {Router, req, res} = require('express');
const { registerController, loginController } = require('../controller/userController');

const userRoutes = Router();

userRoutes.post('/register', (req, res) => {
  registerController(req, res);
});

userRoutes.post('/login', (req, res) => {
  loginController(req, res);
});

module.exports = userRoutes;
