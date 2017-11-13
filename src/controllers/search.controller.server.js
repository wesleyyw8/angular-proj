const fs = require('fs');

const extractParametersUrl = params => {
  let result = {};
  if (params.gender !== 'everyone') {
    result.gender = params.gender;
  }
  if (params.minAge != 'null') {
    result.age = {
      '$gte': parseInt(params.minAge)
    }
  }
  if (params.maxAge !== 'null') {
    result.age = Object.assign(result.age ? result.age : {}, { '$lt': parseInt(params.maxAge)});
  }
  return result;
};

module.exports = (db) => (req, res) => {
  const params = extractParametersUrl({
    gender: req.param('gender'),
    minAge: req.param('minAge'),
    maxAge: req.param('maxAge')
  });

  fs.readFile('everyone.hbs', 'utf8', (err, data) => {
    db.find(params, {}, (err, docs) => {
      res.status(200).send(docs);
    });
  });
}

