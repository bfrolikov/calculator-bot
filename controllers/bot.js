const botRouter = require('express').Router();
const config = require('../utils/config');
const messageProcessor = require('../utils/message_processor');
const axiosSender = require('../utils/axios_sender');

botRouter.post('/', (request, response) => {
  const data = request.body;
  if (data.type === 'confirmation' && data.group_id === Number(config.GROUP_ID))
    response.send(config.CONFIRMATION_TOKEN);
  else if (data.type === 'message_new') {
    const userId = data.object.user_id;
    const receivedMessage = data.object.body;
    if (messageProcessor.validate(receivedMessage))
      axiosSender
        .sendMessage(userId, messageProcessor.getResult(receivedMessage))
        .then(result => response.send('ok'));
    else
      response.send('ok');
  }
  else
    response.send('ok');
});

botRouter.get('/', (request, response) => {
  response.send('OK');
});

module.exports = botRouter;
