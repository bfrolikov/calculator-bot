const botRouter = require('express').Router();
const config = require('../utils/config');

botRouter.post('/', (request, response) => {
  const data = request.body;
 /* if (data.type === 'confirmation' && data.group_id === config.GROUP_ID)
    response.send(config.CONFIRMATION_TOKEN);*/
  console.log(config.GROUP_ID);
  response.send('');
});

botRouter.get('/', (request, response) => {
  response.send('OK');
});

module.exports = botRouter;
