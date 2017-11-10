

const { male } = require('../controllers');

module.exports = (app, db) => {
  app.get('/male', male(db));

  // app.get('/female', );

  // app.get('/under30', );

  // app.get('/over30', );  
}
