const { search, female, over30, under30, everyone } = require('../controllers');

module.exports = (app, db) => {
  const baseUrl = '/endpoints'

  app.get(`${baseUrl}/search`, search(db)); 
}