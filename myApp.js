var express = require('express');
var app = express();
require('dotenv').config();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/json', (req, res) => {
    console.log(process.env.MESSAGE_STYLE);
    process.env.MESSAGE_STYLE === 'uppercase' ? 
      res.json({ "message": "HELLO JSON" }):
      res.json({ "message": "Hello json" })
  })

app.use('/public', express.static(__dirname + '/public'));




































module.exports = app;
