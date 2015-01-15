var mongoConfig = require('../schemas/config');

// schema definitions
var post = require('../schemas/post_schema')(mongoConfig.mongoose);

var Post = mongoConfig.mongoose.model('Post', post);

mongoConfig.db.once('open', function(callback) {
  p1 = new Post({
    title: 'New Post'
  })

  p1.save(function(err, p1) {
    console.log(p1.title)
  })
})
