const { male, female, over30, under30, everyone } = require('../controllers');

module.exports = (app, db) => {
  const baseUrl = '/endpoints'

  app.get(`${baseUrl}/male`, male(db));

  app.get(`${baseUrl}/female`, female(db));

  app.get(`${baseUrl}/over30`, over30(db));

  app.get(`${baseUrl}/under30`, under30(db));

  app.get(`${baseUrl}/everyone`, everyone(db));   
}