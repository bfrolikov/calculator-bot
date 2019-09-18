const axios = require('axios')
const config = require('./config')
const messageUrl = 'https://api.vk.com/method/messages.send?';

const sendMessage = (userId, message) => {
  const resultUrl = `${messageUrl}user_id=${userId}&access_token=${config.ACCESS_KEY}&v=${config.VK_VESION}&message=${message}`;
  console.log(resultUrl);
  return axios
    .get(resultUrl);
};

module.exports = { sendMessage };
