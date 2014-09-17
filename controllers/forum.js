var Topic = require('../models/Topic');
var Category = require('../models/Category');

exports.renderRoom = function(req, res) {
    Topic.find({ 
        topic_cat: req.params.id 
    }, function(err, data) {
        console.log(data)
        if (err)
            res.send(err)
        res.render('forum/room', {
            title: 'Forum',
            topics: data
        });
    });
};

exports.renderCategories = function(req, res) {
    var object = {};
    Category.find(function(err, data) {
      if (err)
          res.send(err)
      console.log(data);
      res.render('forum/blog', {
        title: 'Forum',
        something: data
      });
    });
};
