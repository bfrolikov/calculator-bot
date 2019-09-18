const axios = require('axios');
const httpBuildQuery = require('http-build-query');
const config = require('./config');
const messageUrl = 'https://api.vk.com/method/messages.send?';


const sendMessage = (userId, message) => {
  const query = {
    user_id: userId,
    access_token: config.ACCESS_KEY,
    v: config.VK_VESION,
    message: message
  };
  const resultUrl = httpBuildQuery(query);
  console.log(`${messageUrl}${resultUrl}`);
  return axios
    .get(`${messageUrl}${resultUrl}`);
};

module.exports = { sendMessage };
