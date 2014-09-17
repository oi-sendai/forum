var Topic = require('../models/Topic');
// var TopicControl = require
exports.renderBlog = function(req, res) {
      console.log(req.user);
  res.render('blog/blog', {
    title: 'Blog',
    something: 'else'
  });
};

