var postRoutes = require('./routes/post');

module.exports = function(app) {
  app.get('/', postRoutes.index);
  app.get('/posts/new', postRoutes.new);
  app.post('/posts', postRoutes.create);
}
