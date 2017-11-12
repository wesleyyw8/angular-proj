const fs = require('fs');

module.exports = (db) => (req, res) => {
  fs.readFile('everyone.hbs', 'utf8', (err, data) => {
    db.find({
      age: {
        $gte: 30
      }
    }, {}, (err, docs) => {
      res.status(200).send(docs);
    });
  });
}