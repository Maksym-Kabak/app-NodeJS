const { Router } = require('express');
const { isAuth } = require('../middleware/auth.middleware');

const storiesController = require('../controllers/srories/stories.controller');

const storiesRouter = Router();


storiesRouter.get('/add', isAuth,storiesController.eddStory);

storiesRouter.post('/', isAuth, storiesController.createStory);

storiesRouter.get('/', isAuth, storiesController.getStory);

storiesRouter.get('/:id', isAuth, storiesController.getStoryById);

storiesRouter.get('/edit/:id', isAuth, storiesController.editStory);

storiesRouter.put('/:id', isAuth, storiesController.editOneStory);

storiesRouter.delete('/:id', isAuth, storiesController.deleteStory);

storiesRouter.get('/user/:userId', isAuth, storiesController.getStoryByUser);


module.exports = storiesRouter;
