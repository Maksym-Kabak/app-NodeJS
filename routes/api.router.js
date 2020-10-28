const { Router } = require('express');
const apiRouter = Router();

const { authRouter, mainRouter, storiesRouter } = require('../routes');

apiRouter.use('/', mainRouter);
apiRouter.use('/auth', authRouter);
apiRouter.use('/stories', storiesRouter);


module.exports = apiRouter;
