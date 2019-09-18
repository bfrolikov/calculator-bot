const botRouter = require('express').Router();
const config = require('../utils/config');

botRouter.post('/', (request, response) => {
  const data = request.body;
  if (data.type === 'confirmation' && data.group_id === Number(config.GROUP_ID))
    response.send(config.CONFIRMATION_TOKEN);
  else if (data.type === 'message_new') {
    console.log(data.object.user_id);
    response.send('ok');
  } 
  else
    response.send('');
});

botRouter.get('/', (request, response) => {
  response.send('OK');
});

module.exports = botRouter;
