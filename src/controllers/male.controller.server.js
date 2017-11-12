const fs = require('fs');

module.exports = (db) => (req, res) => {
  fs.readFile('everyone.hbs', 'utf8', (err, data) => {
    db.find({
      gender: 'male'
    }, {}, (err, docs) => {
      res.status(200).send(docs);
    });
  });
}