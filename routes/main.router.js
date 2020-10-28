const { Router } = require('express');
const { isAuth, isGuest } = require('../middleware/auth.middleware');

const mainController = require('../controllers/main.controller');
const Story = require('../models/Story');

const mainRouter = Router();

mainRouter.get('/', isGuest, mainController.login)
mainRouter.get('/dashboard', isAuth, mainController.dashboard)


module.exports = mainRouter;
