const express = require('express');
const app = express();
const fs = require('fs');
const handlebars = require('handlebars');
const Datastore = require('nedb');

const db = new Datastore({
  filename: 'db.json',
  autoload: true
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});


// Init routes
require('./src/routes/routes.server')(app, db);