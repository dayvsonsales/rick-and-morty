const { Router } = require('express');

const charactersRouter = require('./characters.routes');

const routes = Router();

routes.use('/characters', charactersRouter);

module.exports = routes;
