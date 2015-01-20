var Post = require('../models/post');

exports.index = function(req, res){
  var posts = Post.find(function(error, posts) {
    res.render('index', { posts: posts });
  })
};

exports.new = function(req, res){
  res.render('new');
};

exports.create = function(req, res){
  var post = new Post(req.body);
  console.log(req.body);
  console.log(req.params);
  post.save(function(err, post) {
    if (err) {
      res.redirect('/posts/new')
      return;
    }
    console.log('Post saved!');
    res.redirect('/')
  })
};