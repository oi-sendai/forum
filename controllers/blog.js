var Topic = require('../models/Topic');
var TopicControl = require('../controllers/topic.js');
exports.renderBlog = function(req, res) {
    Topic.find(function(err, topics) {
      if (err)
          res.send(err)
      // if (req)
      //   res.json(topics);
      // else
      console.log(topics);

      res.render('blog/blog', {
        title: 'Blog',
        something: topics
      });
    });
};
