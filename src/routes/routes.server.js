const { search } = require('../controllers');

module.exports = (app, db) => {
  const baseUrl = '/endpoints'

  app.get(`${baseUrl}/search`, search(db)); 
}