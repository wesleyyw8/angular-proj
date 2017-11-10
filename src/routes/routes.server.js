const { male, female, over30, under30, everyone } = require('../controllers');

module.exports = (app, db) => {
  app.get('/male', male(db));

  app.get('/female', female(db));

  app.get('/over30', over30(db));

  app.get('/under30', under30(db));

  app.get('/everyone', everyone(db));   
}
