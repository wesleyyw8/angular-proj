const express = require('express');
const app = express();
const Datastore = require('nedb');

app.use('/', express.static(__dirname + '/src/ui')); 
app.use('/scripts', express.static(__dirname + '/node_modules'));

const db = new Datastore({
  filename: 'db.json',
  autoload: true
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});

// Init routes
require('./src/routes/routes.server')(app, db);

app.get('*', function(req, res) {
  res.sendfile('./src/ui/views/index.html');
});