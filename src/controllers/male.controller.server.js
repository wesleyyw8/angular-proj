const fs = require('fs');
const handlebars = require('handlebars');

module.exports = (db) => (req, res) => {
  fs.readFile('everyone.hbs', 'utf8', (err, data) => {
    var template = handlebars.compile(data);
    db.find({
      gender: 'male'
    }, {}, (err, docs) => {
      var rendered = template({
        people: docs
      });
      res.contentType('text/html');
      res.status(200).send(rendered);
    });
  });
}