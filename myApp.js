var express = require('express');
var app = express();
require('dotenv').config();


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/json', (req, res) => {
    process.env.MESSAGE_STYLE === 'uppercase' ? 
      res.json({ "message": "HELLO JSON" }):
      res.json({ "message": "Hello json" })
  })

app.get('/now', (req, res, next) => {
    req.time = new Date().toString();
    next();
    }, (req, res) => {
        res.json({time: req.time});
    }
);

app.use('/public', express.static(__dirname + '/public'));




































module.exports = app;
