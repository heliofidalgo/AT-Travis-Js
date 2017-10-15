"use strict";

var bodyParser     = require('body-parser');
var helmet         = require('helmet');
var express = require('express');
var app = express();

const SixMonths = 15778476000;

app.set('showStackError', true);
app.disable("x-powered-by");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

app.use(helmet.frameguard());
app.use(helmet.xssFilter());
app.use(helmet.noSniff())
app.use(helmet.ieNoOpen());

app.use(helmet.hsts({
  "maxAge": SixMonths,
  "includeSubdomains": true,
  "force": true
}));

app.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
    res.set('Access-Control-Allow-Headers', 
    'Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token');
    next();
});

app.use('/', require('./../src/routes'));

module.exports = app;