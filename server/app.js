const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const app = express();

const config = require('./src/config/index.config')
const routes = require('./src/router/index.router.js');
const notFound = require('./src/router/not-found.router.js');
const mongoose = require('./src/lib/mongoose')


// Setup express
app.disable("x-powered-by");
app.use(express.static('./dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Add headers
app.use(function (req, res, next) {
    // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "https://todo-for-nothing.herokuapp.com");
    // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
  next();
});


//routes
app.use('/', routes);
app.use('/', notFound)



// Server up!
var server = (app.server = http.createServer(app));
server.listen(process.env.PORT || config.PORT, function() {
  console.log("App listening on port - " + config.PORT + "!");
});