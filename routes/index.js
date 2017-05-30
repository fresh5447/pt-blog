const express = require('express');
const ArticleRoutes = require('./articles/routes');
const CategoryRoutes = require('./categories/routes');


/* GET test route. */
module.exports = (app) => {
  app.get('/api/articles', ArticleRoutes.getAll);
  app.post('/api/articles', ArticleRoutes.createOne);
  app.get('/api/articles/:article_id', ArticleRoutes.getOne);
  app.delete('/api/articles/:article_id', ArticleRoutes.removeOne);
  app.put('/api/articles/:article_id', ArticleRoutes.editOne);
  app.post('/api/articles/comment/:article_id', ArticleRoutes.createComment);

  app.get('/api/categories', CategoryRoutes.getAll);
  app.post('/api/categories', CategoryRoutes.createOne);
  app.get('/api/categories/:category_id', CategoryRoutes.getOne);
  app.delete('/api/categories/:category_id', CategoryRoutes.removeOne);
  app.put('/api/categories/:category_id', CategoryRoutes.editOne);

};
