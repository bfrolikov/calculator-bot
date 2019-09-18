const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const botRouter = require('./controllers/bot');

app.use(bodyParser.json());
app.use('/api/bot', botRouter);

module.exports = app;
