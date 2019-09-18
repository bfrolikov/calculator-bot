const botRouter = require('express').Router();

botRouter.post('/', (request, response) => {
  response.send(request.body);
});

module.exports = botRouter;
